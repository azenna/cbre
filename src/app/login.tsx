import Image from "next/image";

export default function Login() {
  return (
    <div className="flex flex-col w-fit items-center bg-slate-100 p-4 gap-2 shadow-md ">
      <h1 className="text-3xl">Welcome</h1>
      <Image alt="corporate art" src="/login.png" width={300} height={400} />
      <form className="w-64">
        <input
          className="text-black p-1 border border-gray-500 focus:outline-none rounded-md"
          id="email"
          type="text"
          placeholder="Enter your email..."
        />
        <input
          className="my-2 p-2 rounded-md bg-blue-500 hover:bg-blue-600 transition-all"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}
