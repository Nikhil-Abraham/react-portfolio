const Navbar = () => {
  return (
    <nav className="p-4 pt-4 maulline">
      <div className="container mx-auto flex items-center justify-between w-2/6 text-muted_gray">
        <a href="#" className=" font-normal text-2xl mx-2">
          Home
        </a>
        <a
          href="#"
          className=" font-normal text-2xl mx-2 transition duration-300 hover:shadow-2xl"
        >
          Tech Stack
        </a>
        <a
          href="#"
          className=" font-normal text-2xl mx-2 transition duration-300 hover:shadow-2xl"
        >
          Experience
        </a>
        <a
          href="#"
          className=" font-normal text-2xl mx-2 transition duration-300 hover:shadow-2xl"
        >
          Projects
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
