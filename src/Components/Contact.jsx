import React, { useState } from 'react';

const Contact = () => {
 
  var phoneNumber = '6285889223445'; 

  const sendToWhatsApp = () => {
      const forInput = document.getElementById('name').value;
      const emailInput = document.getElementById('email').value;
      const textareaInput = document.getElementById('message').value;

      const message = `For: ${forInput}\nEmail: ${emailInput}@gmail.com\nMessage: ${textareaInput}`;

      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      window.open(whatsappURL, '_blank');
  }


  return (
    <div name='contact' className='w-full h-screen  text-black-300 pt-60' id='contact'>
      <div className='max-w-[600px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='w-full flex flex-col justify-center items-center mb-12'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center mb-6'>
            Contact
          </p>
          <p className='py-4 text-2xl text-center'>
            Feel free to reach out!
          </p>
        </div>
        <form  className='w-full flex flex-col'>
          <input
            type='text'
            id='name'
            placeholder='Your Name'
            className='p-2 mb-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-cyan-500'
            required
          />
          <input
            type='email'
            id='email'
            placeholder='Your Email'
            className='p-2 mb-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-cyan-500'
            required
          />
          <textarea
            id='message'
            placeholder='Your Message'
            className='p-2 mb-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-cyan-500'
            rows='5'
            required
          />
          <button type='button' target='_blank' className='bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-400 transition duration-300'
           onClick={sendToWhatsApp}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;