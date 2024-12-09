import { useEffect, useState } from "react";
import { FaCarSide, FaQuestion } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProductInformation() {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const [newProduct, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(foundProduct);
  }, [id, products]);

  if (!newProduct) {
    return (
      <div className="text-center text-gray-500">
        Product not found or still loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Product Image Section */}
        <div className="md:w-1/2 flex items-center justify-center bg-gray-50 p-6">
          <img
            src={newProduct.image}
            alt={newProduct.name}
            className="h-80 object-contain"
          />
        </div>

        {/* Product Details Section */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {newProduct.name}
            </h1>
            <p className="text-xl font-semibold text-red-600 mb-6">
              ₹{newProduct.price}
            </p>
            <p className="text-gray-700 mb-4">
              {newProduct.description || "No description available."}
            </p>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center space-x-4">
              <input
                id="quantity"
                type="number"
                min="1"
                defaultValue="1"
                className="border border-gray-300 rounded-md p-2 w-16 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 space-y-4">
            <p className="flex items-center text-gray-600">
              <FaCarSide className="text-red-500 mr-2" />
              <span>Deliver & Return</span>
            </p>
            <p className="flex items-center text-gray-600">
              <FaQuestion className="text-blue-500 mr-2" />
              <span>Ask a Question</span>
            </p>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Product Description
        </h2>
        <p className="text-gray-600">
          {newProduct.description || "No additional description provided."}
        </p>
      </div>
    </div>
  );
}

export default ProductInformation;
