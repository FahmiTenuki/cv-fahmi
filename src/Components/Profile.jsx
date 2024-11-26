import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <section
      id="home"
      style={{
        height:'100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '100px', 
        textAlign: 'center',
      }}
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ fontSize: '2rem', color: 'black', marginBottom: '20px' }} 
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        style={{ fontSize: '4rem', fontWeight: 'bold', color: 'black', marginBottom: '20px' }} 
      >
        Fahmi Miftahul Hasan
        <span style={{ display: 'block', marginTop: '15px', fontSize: '2rem', color: 'black' }}>
          I build things for the web
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        style={{ fontSize: '1.5rem', color: 'black', maxWidth: '650px', margin: '0 auto', marginBottom: '20px' }} // Tambahkan margin bawah
      >
        <a target="_blank" rel="noopener noreferrer">
          <span style={{ color: 'black', cursor: 'pointer' }}>
            Learn more
          </span>
        </a>
      </motion.p>
      <a href="https://github.com/fahmitenuki" target="_blank" rel="noopener noreferrer">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          style={{
            width: '200px',
            height: '50px',
            fontSize: '1rem',
            border: '1px solid black',
            borderRadius: '8px',
            color: 'black',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'lightgray')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          Check out my project!
        </motion.button>
      </a>
    </section>
  );
};

export default Profile;