import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='w-full h-20 flex justify-between items-center px-4 fixed top-0 left-0 z-50 shadow-lg bg-white/30 backdrop-blur-md'>
      <div className='text-black text-3xl font-bold'>
        Fahmi
      </div>
      <div className='hidden md:flex space-x-8'>
        <a href="#home" className='text-black-300 hover:text-cyan-500 transition duration-300'>Home</a>
        <a href="#aboutme" className='text-black-300 hover:text-cyan-500 transition duration-300'>About Me</a>
        <a href="#skills" className='text-black-300 hover:text-cyan-500 transition duration-300'>Skills</a>
        <a href="#projects" className='text-black-300 hover:text-cyan-500 transition duration-300'>Projects</a>
        <a href="#contact" className='text-black-300 hover:text-cyan-500 transition duration-300'>Contact</a>
      </div>
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-black focus:outline-none'>
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      {isOpen && (
        <div className='absolute top-20 left-0 w-full bg-white shadow-lg md:hidden'>
          <nav className='flex flex-col space-y-2 p-4'>
            <a href="#home" className='text-black-300 hover:text-cyan-500 transition duration-300'>Home</a>
            <a href="#aboutme" className='text-black-300 hover:text-cyan-500 transition duration-300'>About Me</a>
            <a href="#skills" className='text-black-300 hover:text-cyan-500 transition duration-300'>Skills</a>
            <a href="#projects" className='text-black-300 hover:text-cyan-500 transition duration-300'>Projects</a>
            <a href="#contact" className='text-black-300 hover:text-cyan-500 transition duration-300'>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;