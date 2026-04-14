import React from 'react';

const Contact = () => {

  const phoneNumber = '6285889223445'; 

  const sendToWhatsApp = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const messageText = document.getElementById('message').value;

    const message = `Name: ${name}\nEmail: ${email}\nMessage: ${messageText}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  };

  return (
    <section id='contact' className='w-full py-20 scroll-mt-24'>
      <div className='max-w-[600px] mx-auto p-4 flex flex-col justify-center'>
        
        <div className='text-center mb-10'>
          <p className='text-4xl font-bold border-b-4 border-cyan-500 inline-block'>
            Contact
          </p>
          <p className='py-4 text-lg'>Feel free to reach out!</p>
        </div>

        <form className='flex flex-col'>
          <input id='name' type='text' placeholder='Your Name' className='p-2 mb-4 border rounded' />
          <input id='email' type='email' placeholder='Your Email' className='p-2 mb-4 border rounded' />
          <textarea id='message' placeholder='Your Message' className='p-2 mb-4 border rounded' rows='5' />

          <button
            type='button'
            onClick={sendToWhatsApp}
            className='bg-cyan-500 text-white py-2 rounded hover:bg-cyan-400'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;