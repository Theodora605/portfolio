const AUTH_ENDPOINT = "http://127.0.0.1:5000";

export const login = async (username: string, password: string) => {
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

export const logout = async () => {
  const response = await fetch(`${AUTH_ENDPOINT}/logout`, {
    method: "POST",
    credentials: "include",
  });

  return response.ok;
};

export const isLoggedIn = async () => {
  const response = await fetch(`${AUTH_ENDPOINT}/me`, {
    credentials: "include",
  });

  return response.ok;
};
