interface ProjectCardProps {
  name: string;
  image: string;
  description: string;
  onClick?: () => void;
}
const ProjectCard = ({
  name,
  image,
  description,
  onClick,
}: ProjectCardProps) => {
  return (
    <div>
      <div
        className={
          "w-[300px] h-[400px] border-black border-solid border-[3px] bg-dark-brown drop-shadow-xl rounded-xl hover:drop-shadow-md p-3"
        }
        onClick={onClick}
      >
        <img
          className="w-[300px] h-[200px] border-black border-solid border-l-[3px] border-b-[3px] rounded-xl"
          src={image}
        />
        <div className="bg-amber-100 rounded-3xl p-3 mt-3 h-[160px] border-[1px] border-t-[3px] border-r-[3px] border-black border-solid">
          <p className="font-bold mb-3">{name}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
