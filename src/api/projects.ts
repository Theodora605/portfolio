const PROJECTS_URI = "http://127.0.0.1:5000/projects";

interface Project {
  id?: number;
  name: string;
  description: string;
  server_endpoint: string;
  img_uri: string;
  github_url: string;
  demo_url: string | null;
  technologies: Technology[];
}

interface Technology {
  id: number | null;
  description: string;
  img_uri: string;
}

export const getProjects: () => Promise<Project[]> = async () => {
  const response = await fetch(`${PROJECTS_URI}`);

  return response.json();
};

export const getProject: (id: number) => Promise<Project> = async (id) => {
  const response = await fetch(`${PROJECTS_URI}/${id}`);

  return response.json();
};

export const addProject: (project: Project) => Promise<boolean> = async (
  project
) => {
  const response = await fetch(`${PROJECTS_URI}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(project),
  });

  return response.ok;
};

export const deleteProject: (project: Project) => Promise<boolean> = async (
  project
) => {
  const response = await fetch(`${PROJECTS_URI}/${project.id}`, {
    method: "DELETE",
    credentials: "include",
  });

  return response.ok;
};

export const modifyProject: (project: Project) => Promise<boolean> = async (
  project
) => {
  const response = await fetch(`${PROJECTS_URI}/${project.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(project),
  });

  return response.ok;
};
