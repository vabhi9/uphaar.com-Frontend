import { useEffect, useState } from "react";
import axios from "axios";

const OtherProducts = ({ category, currentProductId }) => {
  const [otherProducts, setOtherProducts] = useState([]);

  useEffect(() => {
    const fetchOtherProducts = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/v1/product/other-products`,
          { params: { category, excludeId: currentProductId } }
        );
        setOtherProducts(res.data);
      } catch (error) {
        console.error("Error fetching other products:", error);
      }
    };

    fetchOtherProducts();
  }, [category, currentProductId]);

  if (otherProducts.length === 0) return null;

  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold mb-4">
        Other Products from This Category
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {otherProducts.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg p-4 hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.productName}
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            <h4 className="font-medium text-sm">{product.productName}</h4>
            <p className="text-sm text-gray-500">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherProducts;