import { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "project", "contact"];

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop - 100;
          const height = el.offsetHeight;

          if (
            window.scrollY >= offsetTop &&
            window.scrollY < offsetTop + height
          ) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (section) =>
    `cursor-pointer transition duration-300 ${
      active === section
        ? "text-cyan-500 font-semibold"
        : "text-black hover:text-cyan-400"
    }`;

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl">Fahmi</h1>

        <ul className="flex gap-6">
          <li><a href="#home" className={linkClass("home")}>Home</a></li>
          <li><a href="#about" className={linkClass("about")}>About</a></li>
          <li><a href="#skills" className={linkClass("skills")}>Skills</a></li>
          <li><a href="#project" className={linkClass("project")}>Project</a></li>
          <li><a href="#contact" className={linkClass("contact")}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;