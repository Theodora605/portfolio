import { useEffect } from "react";
import { z } from "zod";
import { isLoggedIn, login } from "../api/Authentication";
import { useNavigate } from "react-router";

interface LoginData {
  username: string;
  password: string;
}

const inputSchema: z.ZodType<LoginData> = z.object({
  username: z.string(),
  password: z.string(),
});

const LoginPage = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const result = inputSchema.safeParse(Object.fromEntries(formData));

    if (result.success) {
      login(result.data.username, result.data.password).then((success) => {
        if (success) {
          navigate("/console");
        }
      });
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn().then((success) => {
      if (success) {
        navigate("/console", { replace: true });
      }
    });
  }, []);

  return (
    <div className="flex justify-center mt-32">
      <div className="w-[500px] h-[200px] p-4 border-dark-brown border-solid border-[6px] rounded-3xl bg-amber-100">
        <div className="flex justify-center mt-6">
          <form className="inline-block" onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label className="mr-10">Username:</label>
                  </td>
                  <td>
                    <input
                      className="border-black border-solid border-[1px]"
                      type="text"
                      name="username"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Password:</label>
                  </td>
                  <td>
                    <input
                      className="border-black border-solid border-[1px]"
                      type="password"
                      name="password"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-center">
              <button
                type="submit"
                className="p-1 mt-5 border-dark-brown border-solid border-[3px] rounded-xl bg-light-brown"
              >
                <p className="mx-3 text-[20px]">Submit</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
