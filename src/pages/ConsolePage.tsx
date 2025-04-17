import { useEffect, useState } from "react";
import { logout, isLoggedIn } from "../api/authentication";
import { useNavigate } from "react-router";
import { deleteProject, getProjects, Project } from "../api/projects";
import ConfirmationModal from "../components/ConfirmationModal";

const ConsolePage = () => {
  const handleLogoutClicked = () => {
    logout().then((success) => {
      if (success) {
        navigate("/login");
      }
    });
  };

  const handleAddProjectClicked = () => {
    navigate("projects");
  };

  const handleDeleteProjectClicked = async () => {
    if (projectSelection === null) {
      return;
    }

    setShowConfirmationModal(true);
  };

  const handleModifyProjectClicked = () => {
    if (projectSelection === null) {
      return;
    }

    navigate(`projects/${projects[projectSelection].id}`);
  };

  const handleDeleteProjectConfirmed = async () => {
    if (projectSelection === null) {
      return;
    }

    const success = await deleteProject(projects[projectSelection]);

    if (success) {
      setProjectSelection(null);
      setShowConfirmationModal(false);
      const newProjects = await getProjects();
      setProjects(newProjects);
    }
  };

  useEffect(() => {
    isLoggedIn().then((success) => {
      if (!success) {
        navigate("/login", { replace: true });
      } else {
        setShowConsole(true);
      }
    });

    getProjects().then((res) => setProjects(res));
  }, []);

  const navigate = useNavigate();
  const [showConsole, setShowConsole] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectSelection, setProjectSelection] = useState<null | number>(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  return (
    <div>
      {showConfirmationModal && (
        <ConfirmationModal
          onCancel={() => setShowConfirmationModal(false)}
          onOK={handleDeleteProjectConfirmed}
          message="Continuing this action will permanently delete this project."
        />
      )}
      {showConsole && (
        <div className="flex justify-center mt-10">
          <div className="w-[1000px] bg-amber-100 border-dark-brown border-[5px] border-solid rounded-3xl p-3">
            <button
              type="button"
              className="p-1 border-dark-brown border-solid border-[3px] rounded-3xl bg-light-brown float-right"
              onClick={handleLogoutClicked}
            >
              <p className="mx-3 text-[20px]">Logout</p>
            </button>
            <h2 className="text-[24px] font-bold text-dark-brown ml-10">
              Console
            </h2>
            <p className="text-[20px] text-dark-brown">Projects</p>
            <div className="min-w-max h-[200px] bg-white border-dark-brown border-solid border-[3px] rounded-xl p-3">
              <table>
                <thead className="table-header-group">
                  <tr>
                    <td>Name</td>
                    <td className="px-3">Active</td>
                    <td className="px-3">Endpoint</td>
                    <td className="px-3">Github</td>
                    <td>Thumbnail URI</td>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, i) => (
                    <tr
                      key={project.name}
                      className={
                        projectSelection === i
                          ? "bg-blue-400 cursor-pointer"
                          : "cursor-pointer"
                      }
                      onClick={() => setProjectSelection(i)}
                    >
                      <td>{project.name}</td>
                      <td className="px-3">
                        {project.active ? "ACTIVE" : "INACTIVE"}
                      </td>
                      <td className="px-3">{project.server_endpoint}</td>
                      <td className="px-3">{project.github_url}</td>
                      <td>{project.img_uri}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex mt-2 float-right gap-2">
              <button
                type="button"
                className="border-dark-brown border-solid border-[3px] rounded-2xl bg-light-brown"
                onClick={handleAddProjectClicked}
              >
                <p className="mx-3 text-[16px]">Add</p>
              </button>
              <button
                type="button"
                className="border-dark-brown border-solid border-[3px] rounded-2xl bg-light-brown"
                onClick={handleModifyProjectClicked}
              >
                <p className="mx-3 text-[16px]">Modify</p>
              </button>
              <button
                type="button"
                className="border-dark-brown border-solid border-[3px] rounded-2xl bg-light-brown"
                onClick={handleDeleteProjectClicked}
              >
                <p className="mx-3 text-[16px]">Delete</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsolePage;
