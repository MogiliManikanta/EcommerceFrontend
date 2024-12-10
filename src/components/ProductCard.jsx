import { FaStar } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  // Toast notification
  const notify = () => {
    toast.success("Product added to cart!", {
      position: "bottom-right", // Toast position
      autoClose: 3000, // Reduced auto-close duration
      hideProgressBar: true, // Simplified appearance
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored", // Vibrant colored theme
    });
  };

  // Handle adding product to cart
  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product)); // Dispatch add-to-cart action
    notify(); // Trigger toast
  };

  return (
    <>
      {/* Product Card */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 ease-in-out">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-sm">
              New
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-4">
            <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{product.description}</p>
            <p className="text-red-500 font-semibold text-lg mt-2">
              {product.price}
            </p>
          </div>

          {/* Product Rating */}
          <div className="flex items-center mt-3 space-x-1">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`${
                  index < product.rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Add to Cart Button */}
          <div
            className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600
            group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-100"
            onClick={handleAddToCart}
          >
            <span className="group-hover:hidden cursor-pointer">+</span>
            <span className="hidden group-hover:block cursor-pointer">
              Add to Cart
            </span>
          </div>
        </div>
      </Link>

      {/* ToastContainer (Global or Scoped Placement) */}
      <ToastContainer />
    </>
  );
}

export default ProductCard;
