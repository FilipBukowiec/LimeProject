import HomeLayout from "./Layout";
import Slider from "./slider";
import Sidebar from "./Sidebar";
import Products from "./Products";

import { productsDummyData } from "../../dummy/productsDummyData";

// For slider
const listOfimage = [
  {
    id: 1,
    url: "https://img.freepik.com/premium-photo/four-beers-glasses-white-background-with-cut-path-file_908985-17183.jpg",
    header: "beers",
  },
  {
    id: 2,
    url: "https://i.pinimg.com/736x/52/96/ce/5296ce202c0a2b64973ef44a58bf2898--probar-wines.jpg",
    header: "vodka",
  },
  {
    id: 3,
    url: "https://static.vecteezy.com/system/resources/previews/003/205/175/non_2x/whiskey-in-shot-glass-on-white-background-free-photo.jpg",
    header: "whisky",
  },
  {
    id: 4,
    url: "img/wines.jpg",
    header: "wines",
  },
  {
    id: 5,
    url: "https://i.pinimg.com/originals/b6/a7/09/b6a70931d012d0196a00a01a69565310.jpg",
    header: "absolut",
  },
];
// for slider//

const HomePage = () => {
  return (
    <HomeLayout>
      <Slider listOfImage={listOfimage} />
      <div className={"w-full grid grid-cols-[1fr_4fr] px-32"}>
        <Sidebar />
        <div className={"grid grid-cols-6 "}>
          {productsDummyData.map((el) => (
            <Products
              prImage={el.prImage}
              brand={el.brand}
              price={el.price}
              vol={el.vol}
              capacity={el.capacity}
            />
          ))}
        </div>
      </div>
    </HomeLayout>
  );
};

export default HomePage;
