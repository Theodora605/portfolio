import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

import GithubImg from "../assets/github.png";

import { getProjects, Project } from "../api/projects";

const ProjectsFrame = () => {
  useEffect(() => {
    getProjects().then((res) => setProjects(res));
  }, []);

  const [cardSelected, setCardSelected] = useState(0);
  const [projects, setProjects] = useState<Project[]>([]);

  return (
    <div className="overflow-x-auto">
      {(projects[cardSelected] || cardSelected === -1) && (
        <div className="flex gap-2">
          <div className="flex gap-2 overflow-x-auto">
            {projects.map((project, i) => (
              <div
                key={`${project.name}-container`}
                className={
                  cardSelected === i
                    ? "border-blue-400 border-[2px] border-solid mb-3 rounded-xl border-opacity-80"
                    : "border-black border-[2px] border-solid mb-3 rounded-xl border-opacity-0"
                }
                style={{
                  opacity: !project.active ? "20%" : "100%",
                  cursor: !project.active ? "" : "pointer",
                }}
              >
                <ProjectCard
                  key={`card-${i}`}
                  name={project.name}
                  image={project.img_uri}
                  description={project.description}
                  onClick={() => {
                    if (!project.active) {
                      return;
                    }
                    if (cardSelected === -1) {
                      setCardSelected(i);
                      return;
                    }
                    if (cardSelected === i) {
                      //setCardSelected(-1);
                      return;
                    }
                    setCardSelected(-1);
                    setTimeout(() => {
                      setCardSelected(i);
                    }, 300);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {(projects[cardSelected] || cardSelected === -1) && (
        <div
          className={
            cardSelected !== -1
              ? "transition scale-100 bg-amber-100 border-dark-brown border-solid border-[3px] p-3 w-[100%] shadow-2xl rounded-2xl "
              : "transition scale-0"
          }
        >
          <div className="flex flex-col xl:flex-row h-max">
            <div className="w-10/12 p-5 overflow-x-auto self-center">
              <div className="flex gap-3">
                {cardSelected !== -1 &&
                  projects[cardSelected].gallery_images.map((image, i) => (
                    <img
                      className="border-[2px] border-t-[3px] border-r-[3px] border-dark-brown border-bold w-auto h-auto"
                      key={`${projects[cardSelected].name}-img${i}`}
                      src={image.img_uri}
                    />
                  ))}
              </div>
            </div>
            <div className="flex w-max self-center xl:self-start xl:flex-col ">
              {cardSelected !== -1 && projects[cardSelected].demo_url && (
                <div className="self-center">
                  <a
                    href={
                      cardSelected !== -1 ? projects[cardSelected].demo_url : ""
                    }
                  >
                    <div className="flex cursor-pointer self-center justify-center bg-orange-500 p-1 px-7 mb-3 border-black border-solid border-[3px] rounded-[15px]">
                      <p className="font-bold">Try it out!</p>
                    </div>
                  </a>
                </div>
              )}
              <a
                target="_blank"
                href={
                  cardSelected !== -1 ? projects[cardSelected].github_url : ""
                }
              >
                <div className="flex cursor-pointer self-center justify-center bg-white p-1 px-4 mx-6 border-black border-solid border-[3px] rounded-[15px] mb-3">
                  <p className="self-center mr-4 font-bold">GitHub</p>
                  <img className="w-[30px] h-auto" src={GithubImg} />
                </div>
              </a>
            </div>
          </div>
          <table>
            <tbody>
              {cardSelected !== -1 &&
                projects[cardSelected].technologies.map((techItem) => (
                  <tr key={techItem.id}>
                    <td className="p-5">
                      <img
                        className="w-auto h-auto lg:w-[150px]"
                        src={techItem.img_uri}
                      />
                    </td>
                    <td className="px-6 w-max">{techItem.description}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProjectsFrame;
