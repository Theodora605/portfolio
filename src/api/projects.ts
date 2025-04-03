const PROJECTS_URI = "http://127.0.0.1:5000";

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
  const response = await fetch(`${PROJECTS_URI}/projects`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
