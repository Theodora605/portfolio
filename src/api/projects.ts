import { API_ENDPOINT } from "./endpoints";

const PROJECTS_URI = `${API_ENDPOINT}/projects`;

export interface Project {
  id?: number;
  name: string;
  description: string;
  server_endpoint: string;
  img_uri: string;
  github_url: string;
  demo_url: string | null;
  active: boolean;
  technologies: Technology[];
  gallery_images: GalleryImage[];
}

interface Technology {
  id: number | null;
  description: string;
  img_uri: string;
}

interface GalleryImage {
  id: number | null;
  img_uri: string;
}

export const getProjects: () => Promise<Project[]> = async () => {
  const response = await fetch(`${PROJECTS_URI}`);
  return response.json();
};

export const getProject: (id: number) => Promise<Project> = async (id) => {
  const response = await fetch(`${PROJECTS_URI}/${id}`);
  if (!response.ok) {
    throw response.json();
  }
  return response.json();
};

export const getProjectsByPath: (
  demoPath: string
) => Promise<Project[]> = async (demoPath) => {
  const response = await fetch(`${PROJECTS_URI}?demo=${demoPath}`);
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
