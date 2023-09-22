import { useMemo, useState } from "react";
import { IconArrowNext, IconArrowPrev } from "../../assets/Icons";
import { AnimatePresence, motion } from "framer-motion";

const Slider = ({ listOfImage }) => {
  const [currentImage, setCurrentImage] = useState(1);

  const handleSlider = (type) => {
    switch (type) {
      case "prev":
        if (currentImage === 1) {
          setCurrentImage(listOfImage.length);
        } else setCurrentImage((prevState) => prevState - 1);
        break;
      case "next":
        if (currentImage === listOfImage.length) {
          setCurrentImage(1);
        } else setCurrentImage((prevState) => prevState + 1);
        break;
      default:
        console.log("this type of action is unhandle");
    }
  };

  return (
    <AnimatePresence>
      <div
        className={
          "h-[350px] w-full py-10 px-32 grid grid-cols-[40px_1fr_40px] transition-opacity"
        }
      >
        <div
          className={"flex items-center cursor-pointer "}
          onClick={() => handleSlider("prev")}
        >
          <IconArrowPrev fill={"#32CD32"} />
        </div>
        {listOfImage.map(
          (image) =>
            image.id === currentImage && (
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                className={
                  "w-full items-center justify-between  h-full rounded-2xl flex shadow-2xl"
                }
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundImage: `url(${image.url})`,
                  backgroundRepeat: "no-repeat",
                }}
              ></motion.div>
            ),
        )}
        <div
          className={"flex items-center  cursor-pointer"}
          onClick={() => {
            handleSlider("next");
          }}
        >
          <IconArrowNext fill={"#32CD32"} />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Slider;
