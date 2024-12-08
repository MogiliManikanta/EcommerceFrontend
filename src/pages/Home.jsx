import { Categories } from "../assets/mockData";
import HeroPng from "../assets/images/Heroimage.jpg";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { ProductsData } from "../assets/mockData";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(setProducts(ProductsData));
    setLoading(false);
  }, [dispatch]);

  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row md:space-x-8">
        {/* Sidebar Categories */}
        <div className="w-full md:w-3/12 bg-gray-50 rounded-lg shadow-md">
          <div className="bg-red-600 text-white text-xs font-bold px-4 py-3 rounded-t-lg">
            Shop By Category
          </div>
          <ul className="space-y-3 bg-white p-4 rounded-b-lg">
            {Categories.map((category, index) => (
              <li
                key={index}
                className="flex items-center text-sm font-medium text-gray-700 hover:bg-red-100 px-3 py-2 rounded-md transition-all duration-300"
              >
                <div className="w-2 h-2 border border-red-500 rounded-full mr-3"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Hero Section */}
        <div className="w-full md:w-9/12 mt-8 md:mt-0 relative rounded-lg overflow-hidden shadow-lg">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src={HeroPng}
              alt="Hero"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-700 opacity-70"></div>
            <div className="absolute top-16 left-8 z-10 text-white space-y-4">
              <p className="text-gray-300 mb-4 text-sm uppercase tracking-wide">
                Mogili Manikanta
              </p>
              <h2 className="text-4xl font-bold leading-tight">
                WELCOME TO E_SHOP
              </h2>
              <p className="text-xl font-semibold text-red-300">
                MILLIONS+ PRODUCTS
              </p>
              <button className="bg-red-600 px-8 py-2 text-white mt-4 rounded-lg shadow-md hover:bg-red-700 transition-all duration-300 hover:scale-105">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="mt-12">
        <InfoSection />
      </div>
      <div className="mt-8">
        <CategorySection />
      </div>

      {/* Top Products Section */}
      <div className="mx-auto py-12 px-4 md:px-16 lg:px-24 bg-gray-50 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Top Products</h2>
        {loading ? (
          <div className="text-center text-xl text-gray-500">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Shop Section */}
      <div className="mt-16">
        <Shop />
      </div>
    </div>
  );
}

export default Home;
