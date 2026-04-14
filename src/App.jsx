import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import Profile from "./Components/Profile";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />

      <div className="pt-20">
        <Profile />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;