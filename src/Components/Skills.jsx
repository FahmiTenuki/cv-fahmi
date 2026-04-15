import React from 'react';

import jsLogo from '../assets/javascript.png';
import reactLogo from '../assets/react.png';
import bootstrapLogo from '../assets/bootstrap.png';
import figmaLogo from '../assets/figma.png';
import laravelLogo from '../assets/laravel.png';
import tailwindLogo from '../assets/tailwind.png';
import expressLogo from '../assets/express.png';
import mysqlLogo from '../assets/mysql.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full py-20 scroll-mt-24 text-black-300' id='skills'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        {/* Header */}
        <div className='w-full flex justify-center items-center flex-col mb-7'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center'>
            Skills
          </p>
          <p className='py-4 text-lg sm:text-2xl text-center'>
           Saya senang mempelajari hal-hal baru. Berikut daftar teknologi yang pernah saya gunakan.
          </p>
        </div>

        {/* Skills Grid */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-2'>
            <img src={expressLogo} alt="Express Logo" className='w-12 sm:w-16 mx-auto' />
            <p className='my-4 text-sm sm:text-base'>Express</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-2'>
            <img src={mysqlLogo} alt="MySQL Logo" className='w-12 sm:w-16 mx-auto' />
            <p className='my-4 text-sm sm:text-base'>MySQL</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-2'>
            <img src={jsLogo} alt="JavaScript Logo" className='w-12 sm:w-16 mx-auto' />
            <p className='my-4 text-sm sm:text-base'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-2'>
            <img src={reactLogo} alt="React Logo" className='w-12 sm:w-16 mx-auto' />
            <p className='my-4 text-sm sm:text-base'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-2'>
            <img src={tailwindLogo} alt="Tailwind Logo" className='w-12 sm:w-16 mx-auto' />
            <p className='my-4 text-sm sm:text-base'>Tailwind</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-2'>
            <img src={bootstrapLogo} alt="Bootstrap Logo" className='w-12 sm:w-16 mx-auto' />
            <p className='my-4 text-sm sm:text-base'>Bootstrap</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-2'>
            <img src={figmaLogo} alt="Figma Logo" className='w-12 sm:w-16 mx-auto' />
            <p className='my-4 text-sm sm:text-base'>Figma</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-2'>
            <img src={laravelLogo} alt="Laravel Logo" className='w-12 sm:w-16 mx-auto' />
            <p className='my-4 text-sm sm:text-base'>Laravel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
