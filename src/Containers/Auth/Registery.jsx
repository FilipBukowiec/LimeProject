import AuthWrapper from "./Layout";

export default function Registery() {
  return (
    <AuthWrapper>
      <div className={"flex items-center flex-col gap-y-2.5 "}>
        <input
          className={
            "p-2 w-full placeholder-lime-400 text-xl bg-transparent border-lime-300 border-2 rounded-lg"
          }
          name="login"
          type="text"
          placeholder="login"
        />
        <input
          className={
            "p-2 w-full placeholder-lime-400 text-xl bg-transparent border-lime-300 border-2 rounded-lg"
          }
          name="password"
          type="password"
          placeholder="password"
        />
        <input
          className={
            "p-2 w-full placeholder-lime-400 text-xl bg-transparent border-lime-300 border-2 rounded-lg"
          }
          name="cpassword"
          type="password"
          placeholder="confirm password"
        />
        <button
          className={
            "px-4 py-2 w-full  text-xl bg-lime-400 rounded-lg text-emerald-500 gap-1 hover:text-white transition-colors duration-400"
          }
        >
          Register
        </button>
      </div>
    </AuthWrapper>
  );
}
