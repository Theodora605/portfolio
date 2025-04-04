import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getProject, modifyProject, Project } from "../api/projects";
import { isLoggedIn } from "../api/authentication";
import DeleteImg from "../assets/sticker-book/delete.png";

const ManageProjectPage = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    if (project === null || id === undefined) {
      return;
    }

    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newProject: Project = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      server_endpoint: formData.get("server_endpoint") as string,
      img_uri: formData.get("img_uri") as string,
      github_url: formData.get("github_url") as string,
      demo_url:
        formData.get("demo_url") !== ""
          ? (formData.get("demo_url") as string)
          : "",
      technologies: [],
    };

    for (let i = 0; i < project.technologies.length; i++) {
      newProject.technologies.push({
        id: project.technologies[i].id,
        description: formData.get(`tech_description_${i}`) as string,
        img_uri: formData.get(`tech_img_uri_${i}`) as string,
      });
    }

    const projectId = parseInt(id);
    if (Number.isNaN(projectId)) {
      return;
    }

    newProject.id = projectId;

    console.log(newProject.description);

    modifyProject(newProject).then((success) => {
      if (success) {
        navigate("/console");
      }
    });
  };

  const handleAddTechClicked = () => {
    const newProject: Project = JSON.parse(JSON.stringify(project));
    newProject.technologies.push({
      id: null,
      description: "",
      img_uri: "",
    });

    setProject(newProject);
  };

  const handleRemoveTechClicked = (idx: number) => {
    if (project?.technologies === undefined) {
      return;
    }

    const newProject: Project = JSON.parse(JSON.stringify(project));
    const newTech = [];
    for (let i = 0; i < project.technologies.length; i++) {
      if (i !== idx) {
        newTech.push(project.technologies[i]);
      }
    }
    newProject.technologies = newTech;

    setProject(newProject);
  };

  useEffect(() => {
    isLoggedIn().then((success) => {
      if (!success) {
        navigate("/login", { replace: true });
      }
    });

    if (id === undefined) {
      return;
    }

    const projectId = parseInt(id);
    if (Number.isNaN(projectId)) {
      return;
    }

    setShowConsole(true);
    getProject(projectId).then((res) => setProject(res));
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState<Project | null>(null);
  const [showConsole, setShowConsole] = useState(false);

  return (
    <div className="flex justify-center m-10">
      {showConsole && (
        <form onSubmit={handleSubmit}>
          <div className="w-[900px] bg-amber-100 border-dark-brown border-[5px] border-solid rounded-3xl p-3">
            <table className="flex justify-center border-spacing-x-[100px] border-spacing-y-[10px] border-separate">
              <tbody>
                <tr>
                  <td>Project Name</td>
                  <td>
                    <input
                      name="name"
                      className="border-solid border-black border-[1px] px-1"
                      type="text"
                      defaultValue={project?.name}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Project Endpoint</td>
                  <td>
                    <input
                      name="server_endpoint"
                      className="border-solid border-black border-[1px] w-[300px] px-1"
                      type="text"
                      defaultValue={project?.server_endpoint}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Thumbnail Resource</td>
                  <td>
                    <input
                      name="img_uri"
                      className="border-solid border-black border-[1px] w-[300px] px-1"
                      type="text"
                      defaultValue={project?.img_uri}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Github</td>
                  <td>
                    <input
                      name="github_url"
                      className="border-solid border-black border-[1px] w-[300px] px-1"
                      type="text"
                      defaultValue={project?.github_url}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Demo (optional)</td>
                  <td>
                    <input
                      name="demo_url"
                      className="border-solid border-black border-[1px] w-[300px] px-1"
                      type="text"
                      defaultValue={project?.demo_url ? project.demo_url : ""}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>
                    <textarea
                      name="description"
                      className="resize-none border-solid border-black border-[1px] w-[300px] h-[300px] px-1"
                      defaultValue={project?.description}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-center">
              <div>
                <p>Technologies</p>
                <div className="border-dark-brown border-[3px] border-solid p-3 rounded-xl">
                  <div className="h-[300px] overflow-y-scroll">
                    {project?.technologies &&
                      project?.technologies.map((tech, i) => (
                        <div
                          key={tech.id}
                          className="flex items-center gap-3 my-2"
                        >
                          <img
                            className="w-[25px] h-auto cursor-pointer"
                            onClick={() => handleRemoveTechClicked(i)}
                            src={DeleteImg}
                          />
                          <input
                            name={`tech_img_uri_${i}`}
                            className="border-black border-solid border-[1px] px-1"
                            type="text"
                            placeholder="Image URI"
                            defaultValue={tech.img_uri}
                          />
                          <textarea
                            name={`tech_description_${i}`}
                            className="resize-none border-solid border-black border-[1px] w-[300px] h-[100px] px-1 mr-3"
                            placeholder="Describe the technology here."
                            defaultValue={tech.description}
                          />
                        </div>
                      ))}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleAddTechClicked}
                  className="bg-light-brown border-dark-brown border-solid border-[3px] rounded-xl mt-1 float-end"
                >
                  <p className="mx-3">Add</p>
                </button>
              </div>
            </div>
          </div>
          <button
            className="bg-light-brown border-dark-brown border-solid border-[3px] rounded-xl mt-1 mr-5 float-end"
            type="submit"
          >
            <p className="mx-3 text-[20px]">Submit</p>
          </button>
        </form>
      )}
    </div>
  );
};

export default ManageProjectPage;
