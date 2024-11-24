import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import aboutMainImage from "../Assets/Images/aboutMainImage.png";
import apj from "../Assets/Images/apj.png";
import billGates from "../Assets/Images/billGates.png";
import einstein from "../Assets/Images/einstein.png";
import nelsonMandela from "../Assets/Images/nelsonMandela.png";
import steveJobs from "../Assets/Images/steveJobs.png";

function AboutUs() {
  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and quality education
            </h1>
            <p className="text-xl text-gray-200">
              Our goal is to provide the affordable and quality education to the
              world. we are providing the platform for the aspiring teachers and
              students to share their skills, creativity and knowledge to each
              other to empower and contribute int the growth and wellness of
              mankind.
            </p>
          </section>

          <div className="w-1/2">
            <img
              id="test1"
              style={{
                filter: "drop-shadow(0px 10px 10px rgb(0,0,0))",
              }}
              alt="about main image"
              className="drop-shadow-2xl"
              src={aboutMainImage}
            ></img>
          </div>
        </div>
        

        <div className="carousel w-1/2 my-16 m-auto">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%] ">
              <img
                src={apj}
                className="w-40 rounded-full border-2 border-gray-400 "
              />
              <p className="text-xl text-gray-200">
                 {"Failure will never overtake me if my determination to succeed is strong enough."}
                 
              </p>
               <h1 className="text-2xl font-semibold ">APJ Abdul kalam</h1>
              <div className="absolute  left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide5" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%] ">
              <img
                src={steveJobs}
                className="w-40 rounded-full border-2 border-gray-400 "
              />
               <p className="text-xl text-gray-200">
                 {"Innovation distinguishes between a leader and a follower."
}
                 
              </p>
               <h1 className="text-2xl font-semibold ">Steve Jobs</h1>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%] ">
              <img
                src={einstein}
                className="w-40 rounded-full border-2 border-gray-400 "
              />
               <p className="text-xl text-gray-200">
                 {"Imagination is the highest form of research."}
                 
              </p>
               <h1 className="text-2xl font-semibold "> Albert Einstein</h1>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          <div id="slide4" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%] ">
              <img
                src={nelsonMandela}
                className="w-40 rounded-full border-2 border-gray-400 "
              />
               <p className="text-xl text-gray-200">
                 {"Education is the most powerful tool you can use to change the world."}
                 
              </p>
               <h1 className="text-2xl font-semibold ">Nelson Mandela</h1>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide5" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          <div id="slide5" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%] ">
              <img
                src={billGates}
                className="w-40 rounded-full border-2 border-gray-400 "
              />
               <p className="text-xl text-gray-200">
                 {"Your most unhappy customers are your greatest source of learning."}
                 
              </p>
               <h1 className="text-2xl font-semibold ">Bill Gates</h1>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;
