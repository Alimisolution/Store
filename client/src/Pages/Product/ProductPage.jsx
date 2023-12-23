import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { addTocart } from "../../slices/cartSlice";
import { useDispatch } from "react-redux";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useGetProductByIdQuery } from "../../slices/productsSlice";
function ProductPage() {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const { data: store, isLoading } = useGetProductByIdQuery(id);
  console.log(store);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addItemsToCart = () => {
    dispatch(addTocart({ ...store, qty }));
    navigate("/cart");
  };
  return (
    <>
      <Header />
      <Link
        to="/"
        className="py-2 sm:text-xl text-sm rounded-md block items-center justify-center bg-black text-white mx-4 md:mx-24 w-[130px] text-center"
      >
        Go Back
      </Link>
      <div className=" mt-5 max-w-xl shadow-lg md:px-20 mx-auto px-4 mb-10 py-5">
        <img
          src={store.image}
          alt={store.title}
          className="md:h-[350px] md:w-[100%] w-[50%] mx-auto"
        />
        <div className="flex justify-between space-x-5 pt-7">
          <p> {store.title}</p>
          <p className="font-semibold text-lg"> ${store.price}</p>
        </div>
        <div className="flex justify-between py-3 items-center">
          <p>{store.category}</p>
          <p className="bg-yellow-900 py-1 px-4 text-white rounded-md">
            {store.inStock > 0 ? "In Stoock" : "Not in Stock"}
          </p>
          {store.inStock === 0 ? null : (
            <div className="flex gap-1">
              <p> Qty:</p>
              <select
                value={qty}
                onChange={(e) => Number(setQty(e.target.value))}
              >
                {[...Array(store.inStock).keys()].map((x) => {
                  return (
                    <option value={x + 1} key={x + 1}>
                      {x + 1}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
        </div>
        <p className="mt-2">{store.description}</p>
        <button
          className="text-center py-1 text-lg font-semibold rounded-lg mt-5 inline-block mx-auto bg-yellow-900 px-5 text-white"
          disabled={store.inStock === 0}
          onClick={addItemsToCart}
        >
          Add To Cart
        </button>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
