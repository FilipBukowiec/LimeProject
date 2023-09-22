const Sidebar = () => {
  return (
    <div
      className={
        "w-full flex flex-col rounded-xl text-center bg-neutral-50 gap-4 border border-gray-200 mt-2"
      }
    >
      <p className={"text-violet-800 text-2xl font-bold py-3"}>Categories</p>

      <p className={"font-bold"}>Types of alcohol</p>
      <div className={"grid grid-cols-2"}>
        <label htmlFor={"idk"}>wine</label>
        <input type={"checkbox"} name={"idk"} />
      </div>
      <div className={"grid grid-cols-2"}>
        <label htmlFor={"idk"}>beer</label>
        <input type={"checkbox"} name={"idk"} />
      </div>
      <div className={"grid grid-cols-2"}>
        <label htmlFor={"idk"}>whisky</label>
        <input type={"checkbox"} name={"idk"} />
      </div>

      <p className={"font-bold"}>Capacity</p>

      <div className={"grid grid-cols-2"}>
        <label htmlFor={"idk"}>0,33L</label>
        <input type={"checkbox"} name={"idk"} />
      </div>
      <div className={"grid grid-cols-2"}>
        <label htmlFor={"idk"}>0,5L</label>
        <input type={"checkbox"} name={"idk"} />
      </div>
      <div className={"grid grid-cols-2"}>
        <label htmlFor={"idk"}>1L</label>
        <input type={"checkbox"} name={"idk"} />
      </div>
      <div className={"grid grid-cols-2"}>
        <label htmlFor={"idk"}>1,5L</label>
        <input type={"checkbox"} name={"idk"} />
      </div>
    </div>
  );
};

export default Sidebar;
