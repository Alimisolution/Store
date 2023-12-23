import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useGetAllProductsQuery } from "../../slices/productsSlice";
function HomePage() {
  const { data: store, isLoading, error } = useGetAllProductsQuery();
  return (
    <>
      <Header />
      {isLoading ? (
        <p className="text-4xl font-semibold text-center my-20">Loading...</p>
      ) : error ? (
        <p className="text-4xl font-semibold text-center my-20">Error...</p>
      ) : (
        <div className="px-4 md:px-24">
          <h1 className="sm:text-4xl text-2xl font-semibold">
            Latest Products
          </h1>
          <div className=" grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-14 sm:my-20 gap-4 px-5 space-y-16 space-x-6">
            {store.map((store) => (
              <div key={store._id} className="bg-white shadow-lg px-5 ">
                <Link to={`/product/${store._id}`}>
                  <img
                    src={store.image}
                    alt={store.title}
                    className="sm:h-[350px] "
                  />
                  <div className="flex justify-between py-3 mt-5">
                    <p> {store.title}</p>
                    <p className="font-semibold text-lg"> ${store.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default HomePage;
