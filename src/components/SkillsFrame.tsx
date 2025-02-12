import ReactImg from "../assets/react.png";
import CssImg from "../assets/css.png";
import HtmlImg from "../assets/html.png";
import JavaImg from "../assets/java.png";
import JsImg from "../assets/js.png";
import PythonImg from "../assets/python.png";
import SpringImg from "../assets/spring.png";
import TailwindImg from "../assets/tailwind.png";
import TsImg from "../assets/ts.png";
import FlaskImg from "../assets/flask.png";
import AwsImg from "../assets/aws.png";
import CloudImg from "../assets/google-cloud.png";
import AlchemyImg from "../assets/alchemy.png";

interface TechItem {
  image: string;
  name: string;
}

const technologyItems: TechItem[] = [
  {
    image: HtmlImg,
    name: "HTML5",
  },
  {
    image: CssImg,
    name: "CSS3",
  },
  {
    image: JsImg,
    name: "Javascript",
  },
  {
    image: TsImg,
    name: "Typescript",
  },
  {
    image: TailwindImg,
    name: "Tailwind",
  },
  {
    image: ReactImg,
    name: "React",
  },
  {
    image: JavaImg,
    name: "Java",
  },
  {
    image: SpringImg,
    name: "Spring",
  },
  {
    image: PythonImg,
    name: "Python",
  },
  {
    image: FlaskImg,
    name: "Flask",
  },
  {
    image: AlchemyImg,
    name: "SQL Alchemy",
  },
  {
    image: CloudImg,
    name: "Google Cloud",
  },
  {
    image: AwsImg,
    name: "AWS",
  },
];

const SkillsFrame = () => {
  return (
    <div className="bg-light-brown w-max p-5 border-dark-brown border-[5px] border-solid rounded-[60px]">
      <div className="grid grid-cols-4 xl:grid-cols-7 max-w-full">
        {technologyItems.map((item) => (
          <div
            key={`item-${item.name}`}
            className="flex flex-col justify-center items-center my-2"
          >
            <img className="w-20 h-20" src={item.image} />
            <p className="text-dark-brown font-bold text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsFrame;
