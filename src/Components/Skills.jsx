import React from 'react';


import htmlLogo from '../assets/html.png'; 
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/javascript.png';
import reactLogo from '../assets/react.png';
import phpLogo from '../assets/php.png';
import bootstrapLogo from '../assets/bootstrap.png';
import figmaLogo from '../assets/figma.png';
import laravelLogo from '../assets/laravel.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen text-black-300' id='skills'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='w-full flex justify-center items-center flex-col mb-7'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center'>
            Skills
          </p>
          <p className='py-4 text-2xl'>
            I enjoy learning new things. Here's a list of technologies I've used
          </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={htmlLogo} alt="HTML Logo" className='w-16 mx-auto' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={cssLogo} alt="CSS Logo" className='w-16 mx-auto' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={jsLogo} alt="JavaScript Logo" className='w-16 mx-auto' />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={reactLogo} alt="React Logo" className='w-16 mx-auto' />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={phpLogo} alt="PHP Logo" className='w-16 mx-auto' />
            <p className='my-4'>PHP</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={bootstrapLogo} alt="Bootstrap Logo" className='w-16 mx-auto' />
            <p className='my-4'>Bootstrap</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={figmaLogo} alt="Figma Logo" className='w-16 mx-auto' />
            <p className='my-4'>Figma</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={laravelLogo} alt="Laravel Logo" className='w-16 mx-auto' />
            <p className='my-4'>Laravel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;