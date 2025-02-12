import NameFrame from "../components/NameFrame";
import AboutFrame from "../components/AboutFrame";
import SkillsFrame from "../components/SkillsFrame";
import ProjectsFrame from "../components/ProjectsFrame";

const HomePage = () => {
  return (
    <div className="flex flex-col 2xl:mx-[12%] self-center justify-center">
      <div>
        <div className="mb-14 mt-24">
          <NameFrame />
        </div>
        <div className="flex 2xl:justify-end">
          <SkillsFrame />
        </div>
      </div>
      <div className="mt-28">
        <div className="flex justify-center">
          <div className="inline-block bg-light-brown p-3 rounded-[40px] border-dark-brown border-solid border-[3px]">
            <h2 className="flex justify-center text-dark-brown font-bold text-[32px]">
              About Me
            </h2>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <AboutFrame />
        </div>
      </div>
      <div className="mt-20 mb-10">
        <div className="flex justify-center my-10">
          <div className="inline-block bg-light-brown p-3 rounded-[40px] border-dark-brown border-solid border-[3px]">
            <h2 className="flex justify-center text-dark-brown font-bold text-[32px]">
              Projects
            </h2>
          </div>
        </div>
        <div className="h-[1500px] bg-light-brown border-solid border-dark-brown border-[3px] p-9 rounded-3xl">
          <div className="flex justify-center">
            <ProjectsFrame />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
