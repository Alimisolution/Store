import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function CartPage() {
  const { cartItem } = useSelector((state) => state.cart);
  console.log(cartItem);
  return (
    <>
      <Header />
      <div>
        {cartItem.lenght === 0 && (
          <div className="bg-green-20 shadow-xl py-4 flex justify-between items-center px-5 max-w-4xl mt-10 mx-6 ">
            <p className="sm:text-3xl  text-xl font-semibold">
              No item in the cart
            </p>
            <Link
              to="/"
              className="bg-yellow-900 py-2 px-5 rounded-md text-white sm:text-lg text-sm font-semibold"
            >
              Add item
            </Link>
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default CartPage;
