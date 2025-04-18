const CV_UPLOAD_URI = "http://127.0.0.1:5000/cv";

export const uploadCV: (file: File) => Promise<boolean> = async (file) => {
  const data = new FormData();
  data.append("cv", file);

  const response = await fetch(CV_UPLOAD_URI, {
    method: "POST",
    body: data,
    credentials: "include",
  });

  return response.ok;
};
