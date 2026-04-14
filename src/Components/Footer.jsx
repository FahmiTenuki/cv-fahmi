import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-10">
      
      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-4 text-2xl">
        <a
          href="https://github.com/fahmitenuki"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/fahmi-miftahul-hasan-3aa5a8397/`"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Copyright */}
      <p>© {new Date().getFullYear()} Fahmi Miftahul Hasan</p>

      <p className="text-sm text-gray-400">
        Built with React & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;