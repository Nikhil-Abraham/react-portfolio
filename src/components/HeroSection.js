import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-9xl text-orange_main mb-2 maulline">
          Nikhil Abraham
        </h1>
        <h2 className="text-3xl text-muted_gray mb-4">
          Software Engineer | Tech Enthusiast
        </h2>
        <p className="text-lg text-muted_gray mb-6">
          Hi there! I'm Nikhil, a passionate Software Engineer with a love for
          crafting robust and innovative solutions. I thrive on turning complex
          problems into elegant, user-friendly applications.
          <br />
          Let's build something amazing together!
        </p>
      </div>
      <div className="flex items-center">
        <a
          href="https://github.com/Nikhil-Abraham"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-8 h-8 mx-2 text-muted_gray hover:text-orange-600" />
        </a>
        <a
          href="https://linkedin.com/in/nikhil-m-abraham/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-8 h-8 mx-2 text-muted_gray hover:text-orange-600" />
        </a>
        <a
          href="https://twitter.com/Nikhil_Abraham_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="w-8 h-8 mx-2 text-muted_gray hover:text-orange-600" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
