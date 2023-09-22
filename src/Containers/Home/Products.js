const Products = ({ type, prImage, price, brand, vol, capacity }) => {
  return (
    <div className={"w-full flex flex-wrap p-2"}>
      <div
        className={" border border-gray-100 rounded-xl flex flex-col w-[300px]"}
      >
        <div className={"flex justify-center"}>
          <img className={"h-[150px]"} src={prImage} alt={"product image"} />
        </div>

        <div className={"flex flex-col p-2 gap-2"}>
          <p className={"w-full flex items-center justify-center"}>{brand}</p>
          <p>Price: {price}</p>
          <p>Vol: {vol}</p>
          <p>Capacity:{capacity}</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
