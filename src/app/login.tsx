export default function Login() {
  return (
    <div className="flex flex-col items-center bg-gray-500 p-4 gap-2"> 
      <h1 className="text-3xl">Welcome</h1>
      <form className="w-64">
        <input className="text-black p-1 rounded-md" id="email" type="text" placeholder="Enter your email..."/>
        <input className="my-1 p-2 rounded-md bg-blue-500" type="submit" value="Submit" />
      </form>
    </div>
  )
}
