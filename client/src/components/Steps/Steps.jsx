import { useState } from "react";
import { Link } from "react-router-dom";

function Steps({ step1, step2, step3, step4 }) {
  return (
    <div className="mx-auto text-cente mt-16 flex gap-2 justify-center px-3">
      <span>
        {step1 ? (
          <Link
            to="/shipping"
            className="bg-yellow-900 text-white py-2 px-4 rounded-md font-semibold sm:text-lg text-xs"
          >
            Login
          </Link>
        ) : (
          <Link
            className="bg-yellow-900 text-white py-2 px-4 rounded-md font-semibold sm:text-lg text-xs"
            style={{ opacity: ".6" }}
          >
            Login
          </Link>
        )}
      </span>
      <span>
        {step2 ? (
          <Link
            to="/payment"
            className="bg-yellow-900 text-white py-2 px-4 rounded-md font-semibold sm:text-lg text-xs"
          >
            Shipping
          </Link>
        ) : (
          <Link
            className="bg-yellow-900 text-white py-2 px-4 rounded-md font-semibold sm:text-lg text-xs"
            style={{ opacity: ".6" }}
          >
            Shipping
          </Link>
        )}
      </span>
      <span>
        {step3 ? (
          <Link
            to="/payment"
            className="bg-yellow-900 text-white py-2 px-4 rounded-md font-semibold sm:text-lg text-xs"
          >
            Payment
          </Link>
        ) : (
          <Link
            className="bg-yellow-900 text-white py-2 px-4 rounded-md font-semibold sm:text-lg text-xs"
            style={{ opacity: ".6" }}
          >
            Payment
          </Link>
        )}
      </span>
      <span>
        {step4 ? (
          <Link
            to="/payment"
            className="bg-yellow-900 text-white py-2 px-4 rounded-md font-semibold sm:text-lg text-xs"
          >
            Order
          </Link>
        ) : (
          <Link
            className="bg-yellow-900 text-white py-2 px-4 rounded-md font-semibold sm:text-lg text-xs"
            style={{ opacity: ".6" }}
          >
            Order
          </Link>
        )}
      </span>
    </div>
  );
}

export default Steps;
