const AUTH_ENDPOINT = "http://127.0.0.1:5000";

export const login: (
  username: string,
  password: string
) => Promise<boolean> = async (username, password) => {
  const response = await fetch(`${AUTH_ENDPOINT}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    credentials: "include",
  });

  return response.ok;
};

export const logout: () => Promise<boolean> = async () => {
  const response = await fetch(`${AUTH_ENDPOINT}/logout`, {
    method: "POST",
    credentials: "include",
  });

  return response.ok;
};

export const isLoggedIn: () => Promise<boolean> = async () => {
  const response = await fetch(`${AUTH_ENDPOINT}/me`, {
    credentials: "include",
  });

  return response.ok;
};
