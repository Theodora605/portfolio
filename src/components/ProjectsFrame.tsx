import { useState } from "react";
import SampleImg from "../assets/tailwind.png";
import ProjectCard from "./ProjectCard";

import LArrow from "../assets/left-arrow.png";
import RArrow from "../assets/right-arrow.png";

import GithubImg from "../assets/github.png";

import ReactImg from "../assets/react.png";
import JavaImg from "../assets/java.png";
import SpringImg from "../assets/spring.png";

import ChessPrev from "../assets/chess-gallery/preview.png";
import ChessImg1 from "../assets/chess-gallery/img2.png";
import ChessImg2 from "../assets/chess-gallery/img1.png";

import StickerPrev from "../assets/stickers-gallery/preview.png";

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
        tag: "chess-fe",
        image: ReactImg,
        description: (
          <p>
            The front end is a web application built in react. Whenever a piece
            is selected, a request is made to the back end for the logic, then
            the screen is rendered based on responses from the server. Images
            used for the chess pieces are the property of
            <a
              className="ml-1 text-blue-600"
              href="https://greenchess.net/info.php?item=downloads"
            >
              https://greenchess.net/
            </a>
            .
          </p>
        ),
      },
      {
        tag: "chess-be",
        image: JavaImg,
        description: (
          <p>
            The entire back end of the application is built in Java 17. All
            communication between the front end and back end is done using
            websockets using the STOMP protocol.
          </p>
        ),
      },
      {
        tag: "chess-fw",
        image: SpringImg,
        description: (
          <p>
            This project was initialized using the
            <a className="mx-1 text-blue-600" href="https://start.spring.io">
              spring initializer
            </a>
            to create a Maven project with the WebSocket dependencies enabled.
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
    galleryItems: [],
    githubUrl: "https://github.com/Theodora605/Sticker-Book-Project",
    linksTo: "/stickers",
    technologies: [
      {
        tag: "i2",
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
  {
    name: "Personal Website",
    image: PortfolioPrev,
    description: "This website is also an ongoing project",
    galleryItems: [],
    githubUrl: "",
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
  const [cardSelected, setCardSelected] = useState(-1);

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-center gap-2">
        <div className="w-[100px] h-[100px] p-2 self-center bg-dark-brown border-black border-solid border-[3px] rounded-[50px] opacity-20">
          <img
            className="justify-center self-center w-[80px] h-[80px]"
            src={LArrow}
          />
        </div>
        {projects.map((projectData, i) => (
          <div
            className={projectData.disabled ? "opacity-20" : "cursor-pointer"}
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
                  setCardSelected(-1);
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
        <div className="w-[100px] h-[100px] p-2 self-center bg-dark-brown border-black border-solid border-[3px] rounded-[50px] opacity-20">
          <img
            className="justify-center self-center w-[80px] h-[80px]"
            src={RArrow}
          />
        </div>
      </div>
      <div
        className={
          cardSelected !== -1
            ? "transition scale-100 bg-amber-100 border-dark-brown border-solid border-[3px] p-3 w-max shadow-2xl "
            : "transition scale-0"
        }
      >
        <div className="flex h-max">
          <div className="w-10/12 p-5">
            <div className="flex gap-3 self-center justify-center">
              {cardSelected !== -1 &&
                projects[cardSelected].galleryItems.map((image, i) => (
                  <img
                    className="border-[2px] border-t-[3px] border-r-[3px] border-dark-brown border-bold w-[300px] h-auto"
                    key={`${projects[cardSelected].name}-img${i}`}
                    src={image}
                  />
                ))}
            </div>
          </div>
          <div className="w-2/12">
            {cardSelected !== -1 && projects[cardSelected].linksTo && (
              <div>
                <a
                  href={
                    cardSelected !== -1 ? projects[cardSelected].linksTo : ""
                  }
                  target="_blank"
                >
                  <div className="flex cursor-pointer self-center justify-center bg-orange-500 p-1 mx-6 mb-3 border-black border-solid border-[3px] rounded-[15px]">
                    <p className="font-bold">Try it out!</p>
                  </div>
                </a>
              </div>
            )}
            <a
              target="_blank"
              href={cardSelected !== -1 ? projects[cardSelected].githubUrl : ""}
            >
              <div className="flex cursor-pointer self-center justify-center bg-white p-1 mx-6 border-black border-solid border-[3px] rounded-[15px]">
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
                    <img className="w-[150px] h-auto" src={techItem.image} />
                  </td>
                  <td className="px-6 w-[1200px]">{techItem.description}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsFrame;
