import { useState } from "react";
import Steps from "../../components/Steps/Steps";

function Shipping() {
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  return (
    <>
      <Steps step2="step2" />
      <div className="md:w-[500px] w-[90%] mx-auto  flex flex-col justify-cener bg-white shadow-lg h-2/3  py-8 px-6">
        <h1 className="text-3xl text-yellow-900 font-semibold mb-7 text-center pt-10">
          Shipping
        </h1>
        <form className="space-y-10 mb-3 ">
          <input
            placeholder="Enter City"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="placeholder:text-yellow-900 font-semibold focus:outline-none border border-1 border-yellow-900 focus:ring focus:ring-yellow-900 rounded-sm block px-5 py-2 w-[100%]"
          />
          <input
            placeholder="Enter Address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="placeholder:text-yellow-900 font-semibold focus:outline-none border border-1 border-yellow-900 focus:ring focus:ring-yellow-900 rounded-sm block px-5 py-2 w-[100%]"
          />
          <input
            placeholder="Enter PostalCode"
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="placeholder:text-yellow-900 font-semibold focus:outline-none border border-1 border-yellow-900 focus:ring focus:ring-yellow-900 rounded-sm block px-5 py-2 w-[100%]"
          />
          <input
            placeholder="Enter Country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="placeholder:text-yellow-900 font-semibold focus:outline-none border border-1 border-yellow-900 focus:ring focus:ring-yellow-900 rounded-sm block px-5 py-2 w-[100%]"
          />
          <button className="bg-yellow-900 block w-[100%] py-2  font-semibold text-xl text-center text-white">
            Continue
          </button>
        </form>
      </div>
    </>
  );
}

export default Shipping;
