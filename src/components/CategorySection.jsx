import menCategory from "../assets/images/MenCategory.jpg";
import womenCategory from "../assets/images/womenCategory.jpg";
import kidCategory from "../assets/images/kidCategory.jpg";

function CategorySection() {
  const categories = [
    {
      title: "Men",
      imageUrl: menCategory,
    },
    {
      title: "Women",
      imageUrl: womenCategory,
    },
    {
      title: "Kids",
      imageUrl: kidCategory,
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Shop By Category</h2>
        <p className="text-gray-600 mt-2">
          Explore our collection tailored for everyone.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            {/* Image */}
            <img
              src={category.imageUrl}
              alt={`${category.title} category`}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-75 group-hover:opacity-60 transition-opacity duration-300"></div>
            {/* Text */}
            <div className="absolute bottom-8 left-6 text-left">
              <h3 className="text-2xl font-bold text-white">
                {category.title}
              </h3>
              <p className="text-gray-200 text-sm mt-1 group-hover:text-gray-50 cursor-pointer">
                View All
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
