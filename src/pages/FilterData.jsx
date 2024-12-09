import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import cartEmptyImage from "../assets/images/noproductimage.jpg";
function FilterData() {
  const filterProducts = useSelector((state) => state.product.filteredData);
  return (
    <div className="container mx-auto px-4 py-8">
      {filterProducts.length > 0 ? (
        <>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Shop
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filterProducts.map((product, index) => (
              <div
                key={index}
                className="transform transition-transform duration-200 hover:scale-105"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center">
          <img src={cartEmptyImage} alt="image" />
        </div>
      )}
    </div>
  );
}
export default FilterData;
