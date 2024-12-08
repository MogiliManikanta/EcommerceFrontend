import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product Added Successfully!");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 ease-in-out">
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
      <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
        <p className="text-red-500 font-semibold text-lg mt-2">
          {product.price}
        </p>
      </div>
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
      <div
        className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600
      group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-100"
        onClick={(e) => handleAddToCart(e, product)}
      >
        <span className="group-hover:hidden cursor-pointer">+</span>
        <span className="hidden group-hover:block cursor-pointer">
          Add to Cart
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
