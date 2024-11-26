import { Button } from 'flowbite-react';
import React from 'react';


const projects = [
  {
    title: "Project One",
    description: "A brief description of Project One. It does amazing things!",
    //link: "", 
    image: "https://via.placeholder.com/300" 
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two. It solves many problems!",
    //link: "",
    image: "https://via.placeholder.com/300" 
  },
  {
    title: "Project Three",
    description: "A brief description of Project Three. It's very useful!",
    //link: "#",
    image: "https://via.placeholder.com/300" 
  },
];

const Project = () => {
  return (
    <div name='project' className='w-full h-screen  text-black-300' id='projects' > 
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='w-full flex justify-center items-center flex-col mb-7'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>
            Projects
          </p>
          <p className='py-4 text-2xl'>
            Here are some of the projects I've worked on
          </p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div key={index} className='bg-[#ffffff] p-6 rounded-lg shadow-md hover:scale-105 duration-500'>
              <img src={project.image} alt={project.title} className='w-full h-48 object-cover rounded-md mb-4' />
              <h3 className='text-xl font-semibold'>{project.title}</h3>
              <p className='py-2'>{project.description}</p>
              <Button   target="_blank" rel="noopener noreferrer" className='text-wihte-500 hover:underline'>
              View Project </Button>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;