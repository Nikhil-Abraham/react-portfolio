const Projects = () => {
  return (
    <div className="p-20 pt-5 h-screen flex flex-col text-muted_gray bg-bg_grey mb-5 ">
      <div className="flex items-center justify-center p-10 mb-10">
        <h1 className="text-6xl louisgeorge">Projects</h1>
      </div>
      <div className="px-10 rounded-lg py-20 flex flex-col shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)]">
        <div className="flex flex-row">
            <h1 className="basis-1/3">Parapet</h1>
            <p className="basis-2/3">Full Stack Web Application</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
