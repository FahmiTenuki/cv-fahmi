import React from "react";
import { FaGithub } from "react-icons/fa";
import project1 from "../assets/Screenshot 2024-11-28 122543.png";

const projects = [
  {
    title: "Kasir Fast Respon",
    description: "Aplikasi kasir berbasis web dengan fitur transaksi cepat.",
    image: project1,
    link: "https://kasir-fast-respon.vercel.app/",
    github: "https://github.com/fahmitenuki/kasir-fast-respon",
  },
  {
    title: "Project Two",
    description: "Coming Soon!",
    image: "https://via.placeholder.com/300/33FF57",
    link: "#",
    github: "#",
  },
  {
    title: "Project Three",
    description: "Coming Soon!",
    image: "https://via.placeholder.com/300/3357FF",
    link: "#",
    github: "#",
  },
];

const Project = () => {
  return (
    <section
      id="project"
      className="w-full py-20 scroll-mt-24 bg-white text-gray-800"
    >
      <div className="max-w-[1200px] mx-auto p-6">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold border-b-4 border-cyan-500 inline-block">
            Projects
          </h1>
          <p className="text-lg mt-4">
            Here are some of the projects I've worked on
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              <div className="flex gap-3">
                

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded text-white transition ${
                    project.link === "#"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-cyan-500 hover:bg-cyan-600"
                  }`}
                >
                  Live Demo
                </a>


                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded border transition ${
                    project.github === "#"
                      ? "border-gray-300 text-gray-400 cursor-not-allowed"
                      : "border-gray-800 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <FaGithub />
                  Code
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;