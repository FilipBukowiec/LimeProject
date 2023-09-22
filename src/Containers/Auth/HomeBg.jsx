const HomeBg = ({ children }) => {
  return (
    <div
      className={"flex flex-col justify-center gap-2 "}
      style={{
        position: "relative",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: "url(img/limebg.jpg)",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
};

export default HomeBg;
