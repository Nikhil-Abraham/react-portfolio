const Navbar = () => {
  return (
    <nav className="bg-slate-100 p-4 pt-4 maulline">
      <div className="container mx-auto flex items-center justify-between w-2/6">
        <a href="#" className="text-slate-700 font-normal text-xl mx-2">
          Home
        </a>
        <a
          href="#"
          className="text-slate-700 font-normal text-xl mx-2 transition duration-300 hover:shadow-2xl"
        >
          About
        </a>
        <a
          href="#"
          className="text-slate-700 font-normal text-xl mx-2 transition duration-300 hover:shadow-2xl"
        >
          Experience
        </a>
        <a
          href="#"
          className="text-slate-700 font-normal text-xl mx-2 transition duration-300 hover:shadow-2xl"
        >
          Education
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
