import { useState } from "react";
import SampleImg from "../assets/tailwind.png";
import ProjectCard from "./ProjectCard";

import GithubImg from "../assets/github.png";

import ReactImg from "../assets/react.png";
import SpringImg from "../assets/spring.png";
import CloudImg from "../assets/google-cloud.png";
import FlaskImg from "../assets/flask.png";
import AwsImg from "../assets/aws.png";

import ChessPrev from "../assets/chess-gallery/preview.png";
import ChessImg1 from "../assets/chess-gallery/img2.png";
import ChessImg2 from "../assets/chess-gallery/img1.png";

import StickerPrev from "../assets/stickers-gallery/preview.png";
import StickerImg1 from "../assets/stickers-gallery/img1.png";

import PortfolioPrev from "../assets/preview.png";

interface TechItem {
  image: string;
  description: JSX.Element;
  tag: string;
}

interface ProjectData {
  name: string;
  image: string;
  description: string;
  galleryItems: string[];
  technologies: TechItem[];
  linksTo?: string;
  githubUrl: string;
  disabled?: boolean;
}

const projects: ProjectData[] = [
  {
    name: "Chess App",
    image: ChessPrev,
    description: `A client-server chess application that communicates via websockets.`,
    galleryItems: [ChessImg1, ChessImg2],
    githubUrl: "https://github.com/Theodora605/chess-application",
    linksTo: "/chess",
    technologies: [
      {
        tag: "chess-be",
        image: SpringImg,
        description: (
          <p>
            The backend is a Java application that was initialized using the
            <a className="mx-1 text-blue-600" href="https://start.spring.io">
              spring initializer
            </a>
            to create a Maven project with the WebSocket dependencies enabled.
            The server communicates with a websocket using the STOMP protocol.
          </p>
        ),
      },
    ],
  },
  {
    name: "Sticker Book",
    image: StickerPrev,
    description:
      "An application where users can upload an paste images on the page.",
    galleryItems: [StickerImg1],
    githubUrl: "https://github.com/Theodora605/Sticker-Book-Project",
    linksTo: "/stickers",
    technologies: [
      {
        tag: "sticker-be",
        image: FlaskImg,
        description: (
          <p>
            The backend is a REST API built using Python/Flask. The application
            uses an SQLite database for saving and restoring the state.
          </p>
        ),
      },
      {
        tag: "sticker-cloud",
        image: CloudImg,
        description: (
          <p>
            The application also allows users to upload images which are sent to
            a Google Cloud bucket for storage.
          </p>
        ),
      },
    ],
  },
  {
    name: "Personal Website",
    image: PortfolioPrev,
    description:
      "This website serves as a place to show what projects I am working on.",
    galleryItems: [],
    githubUrl: "https://github.com/Theodora605/portfolio/tree/main",
    technologies: [
      {
        tag: "portfolio-fe",
        image: ReactImg,
        description: (
          <p>
            This website and any application demos hosted on it are built in
            React/Typescript.
          </p>
        ),
      },
      {
        tag: "portfolio-aws",
        image: AwsImg,
        description: <p>The website is hosted on AWS.</p>,
      },
    ],
  },
  {
    name: "LED Skirt",
    image: SampleImg,
    description:
      "A Raspberry Pi project for producing animations on a skirt using LED strips.",
    galleryItems: [],
    githubUrl: "",
    linksTo: "",
    disabled: true,
    technologies: [
      {
        tag: "i3",
        image: SampleImg,
        description: (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut omnis
            fuga unde magni ab. Unde rerum necessitatibus quae vel? Quaerat
            deleniti delectus, velit porro quam maxime vel aperiam iure in.",
          </p>
        ),
      },
    ],
  },
];

const ProjectsFrame = () => {
  const [cardSelected, setCardSelected] = useState(0);

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-2">
        <div className="flex gap-2 overflow-x-auto">
          {projects.map((projectData, i) => (
            <div
              key={`${projectData.name}-container`}
              className={
                cardSelected === i
                  ? "border-blue-400 border-[2px] border-solid mb-3 rounded-xl border-opacity-80"
                  : "border-black border-[2px] border-solid mb-3 rounded-xl border-opacity-0"
              }
              style={{
                opacity: projectData.disabled ? "20%" : "100%",
                cursor: projectData.disabled ? "" : "pointer",
              }}
            >
              <ProjectCard
                key={`card-${i}`}
                name={projectData.name}
                image={projectData.image}
                description={projectData.description}
                onClick={() => {
                  if (projectData.disabled) {
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
                projects[cardSelected].galleryItems.map((image, i) => (
                  <img
                    className="border-[2px] border-t-[3px] border-r-[3px] border-dark-brown border-bold w-auto h-auto"
                    key={`${projects[cardSelected].name}-img${i}`}
                    src={image}
                  />
                ))}
            </div>
          </div>
          <div className="flex w-max self-center xl:self-start xl:flex-col ">
            {cardSelected !== -1 && projects[cardSelected].linksTo && (
              <div className="self-center">
                <a
                  href={
                    cardSelected !== -1 ? projects[cardSelected].linksTo : ""
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
              href={cardSelected !== -1 ? projects[cardSelected].githubUrl : ""}
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
                <tr key={techItem.tag}>
                  <td className="p-5">
                    <img
                      className="w-auto h-auto lg:w-[150px]"
                      src={techItem.image}
                    />
                  </td>
                  <td className="px-6 w-max">{techItem.description}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsFrame;
