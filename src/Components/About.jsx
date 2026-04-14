import React from "react";
import pp from "../assets/foto.jpeg";

const About = () => {
  return (
   <section
  id="about"
  className="flex flex-col gap-8 px-5 md:px-10 lg:px-44 py-20 scroll-mt-24
   dark:bg-gray-900 dark:text-white">
      <div className="text-center mt-10">
        <h5 className="text-2xl lg:text-5xl font-medium text-gray-900">
          About Me
        </h5>
        <hr className="border-2 my-3 w-24 lg:w-52 rounded-lg border-cyan-600 mx-auto" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <div className="text-slate-900 flex-1">
          <p className="text-justify text-gray-700 md:leading-7 md:text-xl">
            Hello, I’m <strong>Fahmi Miftahul Hasan</strong>, I'm a junior programmer...
          </p>
        </div>

        <img
          alt="Profile"
          className="w-44 h-44 md:w-52 md:h-52 lg:w-80 lg:h-80 rounded-3xl shadow-xl"
          src={pp}
        />
      </div>
    </section>
  );
};

export default About;