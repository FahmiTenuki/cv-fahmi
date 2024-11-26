import React from 'react';

const Header = () => {
  return (
    <header className='w-full h-20 flex justify-between items-center px-4 fixed top-0 left-0 z-50 shadow-lg bg-white/30 backdrop-blur-md'>
      <div className='text-black text-3xl font-bold'>
        Fahmi
      </div>
      <nav className='flex space-x-8'>
        <a href="#home" className='text-black-300 hover:text-cyan-500 transition duration-300'>Home</a>
        <a href="#aboutme" className='text-balck-300 hover:text-cyan-500 transition duration-300'>About Me</a>
        <a href="#skills" className='text-black-300 hover:text-cyan-500 transition duration-300'>Skills</a>
        <a href="#projects" className='text-balck-300 hover:text-cyan-500 transition duration-300'>Projects</a>
        <a href="#contact" className='text-black-300 hover:text-cyan-500 transition duration-300'>Contact</a>
      </nav>
    </header>
  );
};

export default Header;