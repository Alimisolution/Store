import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="md:w-[500px] w-[90%] mx-auto  flex flex-col justify-center bg-white shadow-lg h-2/3 mt-16 py-8 px-6">
      <h1 className="text-3xl text-yellow-900 font-semibold mb-7 text-center pt-10">
        Login
      </h1>
      <form className="space-y-10 mb-3 ">
        <input
          placeholder="Enter Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="placeholder:text-yellow-900 font-semibold focus:outline-none border border-1 border-yellow-900 focus:ring focus:ring-yellow-900 rounded-sm block px-5 py-4 w-[100%]"
        />

        <input
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="placeholder:text-yellow-900 font-semibold focus:outline-none border border-1 border-yellow-900 focus:ring focus:ring-yellow-900 rounded-sm block px-5 py-4 w-[100%]"
        />
        <button className="bg-yellow-900 block w-[100%] py-4  font-semibold text-xl text-center text-white">
          Login
        </button>
      </form>
      <p className="font-semibold pb-10">
        Do not have an account?{" "}
        <Link to="/register" className="text-blue-500">
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;
