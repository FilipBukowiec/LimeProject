import beer from "../../../src/assets/products/heineken.png";

const Wrapper = () => {
  return (
    <div className={"w-full flex flex-wrap"}>
      <div className={"w-[200px] h-[200px] border border-gray-100 rounded-xl"}>
        <img src={beer} />
        <p className={"font-bold"}>Name:</p>
        <p className={"font-bold"}>Type:</p>
        <p className={"font-bold"}>Vol:</p>
        <p className={"font-bold"}>Price:</p>
      </div>
    </div>
  );
};

export default Wrapper;
