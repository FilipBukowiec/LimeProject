import "./tailwind.css";
import AuthPage from "./Containers/Auth/AuthPage";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Registery from "./Containers/Auth/Registery";
import HomeBg from "./Containers/Auth/HomeBg";

function App() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("Login");

  return (
    <div
      className={"grid grid-cols-[3fr_2fr] w-full"}
      style={{ height: "100vh" }}
    >
      <HomeBg>
        <div
          onClick={() => {
            setActivePage("Login");
          }}
          className={
            "self-end hover:bg-lime-400 text-white bg-transparent font-bold min-w-[200px] justify-center transition-width duration-800 hover:w-[300px] rounded-l-md h-[50px] flex items-center cursor-pointer"
          }
        >
          <p>Login</p>
        </div>
        <div
          onClick={() => {
            setActivePage("Registery");
          }}
          className={
            "self-end hover:bg-lime-400 text-white bg-transparent font-bold min-w-[200px] justify-center transition-width duration-800 hover:w-[300px] rounded-l-md h-[50px] flex items-center cursor-pointer"
          }
        >
          <p>Registery</p>
        </div>
      </HomeBg>

      {activePage === "Login" ? (
        <AuthPage />
      ) : activePage === "Registery" ? (
        <Registery />
      ) : (
        <div>Loading .....</div>
      )}
    </div>
  );
}

export default App;
