const Experience = () => {
  return (
    <div className="p-20 pt-5 h-screen flex flex-col text-muted_gray bg-bg_grey mb-5 ">
      <div className="flex items-center justify-center p-10 mb-20">
        <h1 className="text-6xl louisgeorge">Experience</h1>
      </div>
      <div className="px-10 pl-20 rounded-lg py-20 flex flex-col shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)]">
        <div className="flex flex-col justify-between">
          <a
            href="https://www.orangepower.co.uk/"
            target="_blank"
            className="text-3xl mb-2 text-orange_main hover:text-orange_main louisgeorge"
          >
            Orange Power Ltd UK
          </a>
          <h1 className="text-3xl mb-2 louisgeorge">Software Engineer</h1>
        </div>
        <h2 className="text-xl">2021 - Present</h2>
        <ul className="list-disc list-inside text-lg py-5 px-5 pl-20">
          <li>
            Played a key role as one of the founding engineers, contributing to
            the company's growth to a quarter-million-pound valuation.
          </li>
          <li>
            Spearheaded the growth of a high-impact app with over 30,000 active
            users, positioning it as a top 5 app in the UK.
          </li>
          <li>
            Enhanced the app's functionality through the development of robust
            APIs, optimizing user interactions and contributing to a seamless
            user experience.
          </li>
          <li>
            Automated backend processes to collect and process user consumption
            data, implementing efficient data pipelines for generating valuable
            consumption trends and insights.
          </li>
          <li>
            Introduced user reward calculation functions, fostering increased
            user engagement and loyalty to the app.
          </li>
          <li>
            Successfully integrated third-party smart APIs, expanding the app's
            capabilities and elevating overall user satisfaction.
          </li>
          <li>
            Implemented advanced user grouping algorithms based on MPAN
            properties, collaborating with third-party grouping systems for
            heightened operational efficiency.
          </li>
          <li>
            Led and executed Cloud and DevOps initiatives using AWS services,
            establishing a resilient infrastructure for efficient data
            management and storage.
          </li>
          <li>
            Applied Python for development tasks and collaborated on CI/CD
            implementation, streamlining development processes and ensuring code
            quality.
          </li>
          <li>
            Demonstrated proficiency in big data processing, utilizing relevant
            technologies for scalable and efficient data handling.
          </li>
          <li>
            Applied data analytics and machine learning techniques for
            forecasting, contributing to strategic decision-making processes.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
