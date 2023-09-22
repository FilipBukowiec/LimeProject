import logo from "../../assets/img/lime.png";
import basket from "../../assets/img/basket-loaded-svgrepo-com.svg";
import favourites from "../../assets/img/favorite-svgrepo-com.svg";
import { SearchIcon } from "../../assets/Icons";
import btnProduct from "./Wrapper";

const Header = () => {
  return (
    <div className={"w-full relative"}>
      <div className={"h-[4rem] flex justify-center items-center"}>
        <div className={"h-1/2 w-1/2 flex gap-4 "}>
          <img src={logo} className={"h-full"} />
          <input
            className={
              " border w-full border-gray-200 p-2 rounded-2xl outline-violet-800"
            }
            type="text"
            placeholder="search product"
          />
          <div className={"h-full flex items-center"}>
            <SearchIcon fill={""} />
          </div>
        </div>
        <div
          className={
            "flex h-[4rem] justify-end items-center absolute right-10 gap-2"
          }
        >
          <img src={favourites} className={"h-[30%]"} />
          <img src={basket} className={"h-[30%]"} />
        </div>
      </div>

      <div className={"bg-lime-300 flex gap-20 justify-center shadow-xl  "}>
        <button
          className={
            "p-3 hover:bg-lime-200 text-violet-800 bg-lime-300 transition-colors duration-200 rounded-xl text-xl"
          }
        >
          Beers
        </button>
        <button
          className={
            "p-3 hover:bg-lime-200 text-violet-800 bg-lime-300 transition-colors duration-200 rounded-xl text-xl"
          }
        >
          Wines
        </button>
        <button
          className={
            "p-3 hover:bg-lime-200 text-violet-800 bg-lime-300 transition-colors duration-200 rounded-xl text-xl"
          }
        >
          Whisky
        </button>
        <button
          className={
            "p-3 hover:bg-lime-200 text-violet-800 bg-lime-300 transition-colors duration-200 rounded-xl text-xl"
          }
        >
          Vodka
        </button>
      </div>
    </div>
  );
};

export default Header;
