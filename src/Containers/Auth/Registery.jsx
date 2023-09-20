import logo from "../../assets/img/lime.png";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import twitter from "../../assets/img/twitter.png";

export default function Registery() {
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
      </div>
    </div>
  );
}
