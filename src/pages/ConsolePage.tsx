import { useEffect, useState } from "react";
import { logout, isLoggedIn } from "../api/Authentication";
import { useNavigate } from "react-router";
import { getProjects } from "../api/projects";

const ConsolePage = () => {
  const handleTestClicked = () => {
    getProjects().then((res) => console.log(res[0].name));
  };

  const handleLogoutClicked = () => {
    logout().then((success) => {
      if (success) {
        navigate("/login");
      }
    });
  };

  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn().then((success) => {
      if (!success) {
        navigate("/login", { replace: true });
      } else {
        setShowConsole(true);
      }
    });
  }, []);

  const [showConsole, setShowConsole] = useState(false);

  return (
    <div>
      {showConsole && (
        <div>
          <button
            type="submit"
            className="p-1 mt-5 border-dark-brown border-solid border-[3px] rounded-xl bg-light-brown"
            onClick={handleLogoutClicked}
          >
            <p className="mx-3 text-[20px]">Logout</p>
          </button>

          <button
            type="submit"
            className="p-1 mt-5 border-dark-brown border-solid border-[3px] rounded-xl bg-light-brown"
            onClick={handleTestClicked}
          >
            <p className="mx-3 text-[20px]">Test</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default ConsolePage;
