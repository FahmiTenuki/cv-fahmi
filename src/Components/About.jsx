import React from "react";
import pp from "../assets/mi.jpg";

const About = () => {
  return (
    <div
      className="lex flex-col gap-f8 px-5 md:px-10 lg:px-44 md:h-screen"
      id="aboutme"
    >
      <div
        className="mt-16 md:mt-24 text-center" 
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        <h5 className="text-2xl lg:text-5xl font-medium text-gray-900 dark:text-white">
          About Me
        </h5>
        <hr className="border-2 my-3 w-24 lg:w-52 rounded-lg border-cyan-600 mx-auto" /> 
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div
          className="text-slate-900 px-3 lg:px-12 py-4 flex-1" 
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <p className="text-justify text-gray-700 md:leading-7 md:text-xl">
            Hello, I’m <strong>Fahmi Miftahul Hasan</strong>, I'm a junior programmer who 
            believes that coding isn't just about logic, 
            it's also the art of creating solutions. 
            Every bug is an opportunity to learn, 
            and every project is a challenge to grow.
           
          </p>
        </div>

        <img
          alt="Profile"
          className="w-44 h-44 md:w-52 md:h-52 lg:w-80 lg:h-80 rounded-3xl shadow-xl"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          src={pp}
        />
      </div>
    </div>
  );
};

export default About;