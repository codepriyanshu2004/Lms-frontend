
import React, { useState } from 'react'
import HomeLayout from '../Layouts/HomeLayout'

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { login } from '../Redux/Slices/AuthSlice'

function Signup() {

  const dispatch = useDispatch();
  const navigate = useNavigate();


//  const [previewImage, setPreviewImage] = useState("");
 
 const [loginData,setLoginData] =useState({
 
  email:"",
  password:""
 

 });

  function handleUserInput(e){
    const{name,value} =e.target;
    setLoginData({
      ...loginData,
      [name]:value
    })
  }


//   function getImage(event){
//     event.preventDefault();

//     // getting the image
//     const uploadedImage = event.target.files[0];

//     if(uploadedImage){
//        setSignupDate({
//           ...signupData,
//            avatar:uploadedImage
//        });
        
//         const fileReader = new FileReader();
//         fileReader.readAsDataURL(uploadedImage);
//         fileReader.addEventListener("load",function(){
//           // console.log(this.result);
//           setPreviewImage(this.result)
          
//         })
//     }
//   }



   async function onLogin(event){
     event.preventDefault();  

    if(!loginData.email || !loginData.password ){
       toast.error("Please fill alll the details");
       return;
    }

    //checking name field length
    // if(signupData.fullName.length<5){
    //   toast.error("Name should be atleast of 5 characters")
    //   return;
    // }
    //checking valid email
//     if(!signupData.email.match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
//       toast.error("Invalid email id");
//     return;
//   }
    //checking password validation
    // if(!signupData.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)){
    //   toast.error("Password should be 6-16 character long with atleast a number and special character");
    //   return;
    // }

    // const formData = new FormData();
    // formData.append("fullName",signupData.fullName);
    // formData.append("email",signupData.email);
    // formData.append("password",signupData.password);
    // formData.append("avatar",signupData.avatar);

    //dispacth create account action
   
    const response = await dispatch(login(loginData));
    console.log(response);
    
    if(response?.payload?.success)
          navigate("/");

    setLoginData({
    //   fullName:"",
      email:"",
      password:"",
    //   avatar:""

    });

    // setPreviewImage("")

    }






  return (
    <HomeLayout>

        <div className="flex overflow-x-auto items-center justify-center h-[90vh]">
           
           <form noValidate onSubmit={onLogin}   className='flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]'>
              <h1 className='text-center text-2xl font-bold '>
                Login Page

              </h1>



                <div className='flex flex-col gap-1'>
                   <label htmlFor='email' className='font-semibold'>Email</label>
                    <input
                    type='email'
                    required
                    name='email'
                    id='email'
                    placeholder='Enter your email...'
                    className='bg-transparent px-2 py-1 border'
                    onChange={handleUserInput}
                    value={loginData.email}
                    />

                     </div>
                      
                      <div className='flex flex-col gap-1'>
                    <label htmlFor='password' className='font-semibold'>Password</label>
                    <input
                    type='password'
                    required
                    name='password'
                    id='password'
                    placeholder='Enter your password...'
                    className='bg-transparent px-2 py-1 border'
                    onChange={handleUserInput}
                    value={loginData.password}
                    />
                  
                </div>

                <button type='submit'  className=' mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer'>
                  Login
                </button>

                <p className='text-center'>
                     Do not have an account ? <Link to="/signup" className='link text-accent cursor-pointer'>Signup</Link>
                </p>







           </form>

        </div>

    </HomeLayout>
  )
}

export default Signup