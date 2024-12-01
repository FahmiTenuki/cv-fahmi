import { Button } from 'flowbite-react';
import React from 'react';

const projects = [
  {
    title: "Project One",
    description: "A brief description of Project One. It does amazing things!",
    image: "https://via.placeholder.com/300"
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two. It solves many problems!",
    image: "https://via.placeholder.com/300"
  },
  {
    title: "Project Three",
    description: "A brief description of Project Three. It's very useful!",
    image: "https://via.placeholder.com/300"
  },
];

const Project = () => {
  return (
    <div name='project' className='w-full bg-white text-gray-800 py-10' id='projects'>
      <div className='max-w-[1200px] mx-auto p-6'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold border-b-4 border-cyan-500 inline-block'>
            Projects
          </h1>
          <p className='text-lg mt-4'>
            Here are some of the projects I've worked on
          </p>
        </div>

        {/* Project Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300'
            >
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-48 object-cover rounded-md mb-4'
              />
              <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
              <p className='text-gray-600 mb-4'>{project.description}</p>
              <Button
                target="_blank"
                rel="noopener noreferrer"
                className='bg-cyan-500 text-white hover:bg-cyan-700'
              >
                View Project
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
