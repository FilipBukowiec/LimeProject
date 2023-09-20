import logo from "../../assets/img/lime.png";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import twitter from "../../assets/img/twitter.png";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const autenticatedUser = { login: "admin", password: "admin2115" };
const AuthPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ login: "", password: "" });
  const handleForm = (name, param) => {
    console.log(name, param);
    setUser((prevState) => {
      return { ...user, [name]: param };
    });
  };

  // const valid = useMemo(() => {
  //     const regex = new RegExp('A-Z');
  //     const {password} = user
  //     return !(password.length <= 8 && regex.test(user.password));
  // }, [user])

  const handleSubmit = () => {
    if (
      autenticatedUser.login === user.login &&
      autenticatedUser.password === user.password
    ) {
      navigate("/home");
    } else {
      console.log("incorrect autentication object");
    }
  };

  return (
    <div className={"w-full flex items-center justify-center p-16"}>
      <div
        className={
          "min-h-[600px] max-w-[400px] p-8 gap-4 bg-emerald-50 rounded-2xl flex-col flex shadow-xl "
        }
      >
        <div className={`h-[250px]  flex justify-center items-center`}>
          <img
            alt={"lime logo"}
            src={logo}
            className={"w-1/2 border-b-2 border-lime-900"}
          />
        </div>
        <div className={"flex items-center flex-col gap-y-2.5"}>
          <input
            onChange={(e) => handleForm(e.target.name, e.target.value)}
            name={"login"}
            className={
              "p-2 w-full placeholder-lime-400 text-xl bg-transparent border-lime-300 border-4 rounded-lg"
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
              "p-2 w-full placeholder-lime-400 text-xl bg-transparent border-lime-300 border-4 rounded-lg"
            }
            type="password"
            placeholder="password"
          />
          <button
            className={
              "px-4 py-2 w-full  text-xl bg-lime-400 rounded-lg text-emerald-500 gap-1 "
            }
            onClick={handleSubmit}
          >
            Submit
          </button>
          <div className={"flex justify-around gap-3 w-1/2"}>
            <img alt={"facebook"} src={facebook} className={"max-w-[40px]"} />
            <img alt={"instagram"} src={instagram} className={"max-w-[40px]"} />
            <img alt={"twitter"} src={twitter} className={"max-w-[40px]"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
