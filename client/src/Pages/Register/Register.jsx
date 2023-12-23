import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="md:w-[500px] w-[90%] mx-auto  flex flex-col justify-center bg-white shadow-lg h-2/3 mt-16 py-2 px-6 mb-8">
      <h1 className="text-3xl text-yellow-900 font-semibold mb-7 text-center pt-10">
        Register
      </h1>
      <form className="space-y-10 mb-3 ">
        <input
          placeholder="Enter Full Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="placeholder:text-yellow-900 font-semibold focus:outline-none border border-1 border-yellow-900 focus:ring focus:ring-yellow-900 rounded-sm block px-5 py-4 w-[100%]"
        />
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
        <input
          placeholder="Enter ConfrimPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="placeholder:text-yellow-900 font-semibold focus:outline-none border border-1 border-yellow-900 focus:ring focus:ring-yellow-900 rounded-sm block px-5 py-4 w-[100%]"
        />
        <input
          placeholder="Image Url"
          type="file"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="placeholder:text-yellow-900 font-semibold focus:outline-none border border-1 border-yellow-900 focus:ring focus:ring-yellow-900 rounded-sm block px-5 py-4 w-[100%]"
        />
        <button className="bg-yellow-900 block w-[100%] py-4  font-semibold text-xl text-center text-white">
          Register
        </button>
      </form>
      <p className="font-semibold pb-10">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500">
          Login
        </Link>
      </p>
    </div>
  );
}

export default Register;
