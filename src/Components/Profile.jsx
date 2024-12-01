import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-screen pt-24 text-center"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-2xl text-black mb-5"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-black mb-5"
      >
        Fahmi Miftahul Hasan
        <span className="block mt-4 text-2xl md:text-3xl text-black">
          I build things for the web
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-lg md:text-xl text-black max-w-2xl mx-auto mb-5"
      >
        <a target="_blank" rel="noopener noreferrer">
          <span className="text-black cursor-pointer">Learn more</span>
        </a>
      </motion.p>
      <a href="https://github.com/fahmitenuki" target="_blank" rel="noopener noreferrer">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-48 h-12 text-lg border border-black rounded-lg text-black bg-transparent cursor-pointer transition duration-300 hover:bg-light-gray"
        >
          Check out my project!
        </motion.button>
      </a>
    </section>
  );
};

export default Profile;