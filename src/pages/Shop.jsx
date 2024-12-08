import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

function Shop() {
  const products = useSelector((state) => state.product.products);

  if (!products || products.length === 0) {
    return (
      <div className="text-center text-lg text-gray-500">
        Loading products...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Shop
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="transform transition-transform duration-200 hover:scale-105"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
