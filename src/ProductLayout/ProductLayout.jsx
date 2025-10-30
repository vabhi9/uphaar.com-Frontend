import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../Cart/CartContext";
import { useVisibility } from "../utils/Visibilitycontext";

const checkBoxes = [
  { label: "100 - 499", min: 100, max: 499 },
  { label: "500 - 999", min: 500, max: 999 },
  { label: "1000 - 1499", min: 1000, max: 1499 },
  { label: "1500 - 1999", min: 1500, max: 1999 },
  { label: "2000 - 2499", min: 2000, max: 2499 },
  { label: "2500 - 2999", min: 2500, max: 2999 },
  { label: "3000 - 3499", min: 3000, max: 3499 },
];

const ProductLayout = () => {
  const { addToCart } = useCart();
  const [selectedCheck, setSelectedCheck] = useState(null);
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const { hideRedBox } = useVisibility();

  const handleCheckboxChange = (min, max) => {
    setSelectedCheck((prev) =>
      prev && prev.min === min && prev.max === max ? null : { min, max }
    );
  };

  const filteredItems = products.filter(
    (item) =>
      !selectedCheck ||
      (item.price >= selectedCheck.min && item.price <= selectedCheck.max)
  );

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/api/v1/product/register/${category}`
      )
      .then((response) => {
        if (Array.isArray(response.data.data)) {
          setProducts(response.data.data);
        } else setProducts([]);
      })
      .catch(() => setProducts([]));
  }, [category]);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col md:flex-row">
      {/* Sidebar */}
      {!hideRedBox && (
        <aside className="w-full md:w-1/5 bg-blue-50 md:sticky md:top-10 p-6 flex flex-col items-center md:items-start border-r border-gray-300">
          <h1 className="font-bold text-2xl mb-6 text-blue-700">
            Filter by Price
          </h1>
          <div className="flex flex-wrap md:flex-col gap-4 text-lg w-full">
            {checkBoxes.map(({ label, min, max }, index) => (
              <label
                key={index}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-blue-600"
                  checked={
                    selectedCheck &&
                    selectedCheck.min === min &&
                    selectedCheck.max === max
                  }
                  onChange={() => handleCheckboxChange(min, max)}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </aside>
      )}

      {/* Product Grid */}
      <section className="flex-1 flex justify-center items-start p-4 flex-wrap">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((Product) => (
              <Link
                to={`/product`}
                state={Product}
                key={Product._id}
                className="bg-offWhite border border-slate-300 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex flex-col items-start p-3 h-full">
                  <img
                    src={Product.image}
                    alt={Product.productName}
                    className="w-full h-52 object-cover rounded-xl mb-3"
                  />
                  <h2 className="font-semibold text-lg text-gray-800">
                    {Product.productName}
                  </h2>
                  <p className="text-gray-500 text-sm">{Product.category}</p>
                  <p className="text-blue-600 font-bold mt-1">
                    ₹{Product.price}
                  </p>

                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded mt-auto w-full hover:bg-blue-700 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToCart(Product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600 text-lg">
              No products match the selected filters.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductLayout;
