import logo from "../../assets/img/lime.png";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import twitter from "../../assets/img/twitter.png";

const AuthWrapper = ({ children }) => {
  return (
    <div className={"w-full flex items-center justify-center p-16"}>
      <div
        className={
          "min-h-[700px] relative max-w-[400px] p-8 gap-4 bg-emerald-50 rounded-2xl flex-col flex shadow-xl "
        }
      >
        <div className={`h-[250px]  flex justify-center items-center`}>
          <img
            alt={"lime logo"}
            src={logo}
            className={"w-1/2 border-b-2 border-lime-900"}
          />
        </div>
        {children}
        <div
          className={
            "flex w-full absolute left-0 bottom-10 justify-around gap-3"
          }
        >
          <img alt={"facebook"} src={facebook} className={"max-w-[40px]"} />
          <img alt={"instagram"} src={instagram} className={"max-w-[40px]"} />
          <img alt={"twitter"} src={twitter} className={"max-w-[40px]"} />
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
