import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthWrapper from "./Layout";

const autenticatedUser = { login: "admin", password: "admin2115" };
const AuthPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ login: "", password: "" });
  const handleForm = (name, param) => {
    setUser((prevState) => {
      return { ...user, [name]: param };
    });
  };

  const handleSubmit = () => {
    if (
      autenticatedUser.login === user.login &&
      autenticatedUser.password === user.password
    ) {
      navigate("/Home");
    } else {
      console.log("incorrect autentication object");
    }
  };

  return (
    <AuthWrapper>
      <div className={"flex items-center flex-col gap-y-2.5"}>
        <input
          onChange={(e) => handleForm(e.target.name, e.target.value)}
          name={"login"}
          className={
            "p-2 w-full placeholder-lime-400 text-xl bg-transparent border-lime-300 border-2 rounded-lg"
          }
          type="text"
          value={user.login}
          placeholder="login"
        />
        <input
          value={user.password}
          name={"password"}
          onChange={(e) => handleForm(e.target.name, e.target.value)}
          className={
            "p-2 w-full placeholder-lime-400 text-xl bg-transparent border-lime-300 border-2 rounded-lg"
          }
          type="password"
          placeholder="password"
        />
        <button
          className={
            "px-4 py-2 w-full  text-xl bg-lime-400 rounded-lg text-emerald-500 gap-1 hover:text-white transition-colors duration-400"
          }
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </AuthWrapper>
  );
};

export default AuthPage;
