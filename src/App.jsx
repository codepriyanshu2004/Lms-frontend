
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'

import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFound'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import CourseList from './Pages/Course/CourseList'
import ContactUs from './Pages/ContactUs'
import Denied from './Pages/Denied'
import CourseDescription from './Pages/Course/CourseDescription'
import RequireAuth from './Components/Auth/RequireAuth'
import CreateCourse from './Pages/Course/CreateCourse'
import Profile from './Pages/User/Profile'

function App() {

  return (
   <>

   <Routes> 

    <Route path='/' element ={<HomePage />}></Route>
    <Route path='/about' element ={<AboutUs />}></Route>
    <Route path='/courses' element ={<CourseList />}></Route>
    <Route path='/contact' element={<ContactUs />}></Route>
    <Route path='/denied' element ={<Denied />}></Route>
    <Route path='/course/description' element={<CourseDescription />}></Route>

    <Route path='/signup' element ={<Signup />}></Route>
    <Route path='/login' element ={<Login />}></Route>


    <Route element ={<RequireAuth allowedRoles={["ADMIN",]} />}>
       <Route path='/course/create' element ={<CreateCourse/>}></Route>
    </Route>

   <Route element ={<RequireAuth allowedRoles={["ADMIN","USER"]} />}>
      <Route path='/user/profile' element= {<Profile/>}></Route>
   </Route>

   

    <Route path='*' element={<NotFound />} />

    </Routes>



   </>
  )
}

export default App
