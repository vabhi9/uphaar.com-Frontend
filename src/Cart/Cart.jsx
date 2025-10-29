import { useEffect } from "react";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  // console.log("CART", cart);
  // const total = cart.reduce(
  //   (sum, item) => sum + item.price * (item.qty || 1),
  //   0
  // );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex justify-center py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-6 md:p-10"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <h2 className="text-2xl font-semibold text-[#012C4F] flex items-center gap-2">
            <FaShoppingCart /> Your Cart
          </h2>
          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded-lg hover:bg-red-200 transition"
            >
              Clear Cart
            </button>
          )}
        </div>

        {/* Empty State */}
        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">
              Your cart Looking empty. Start Fill it!
            </p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-6">
              {cart.map((item, index) => (
                <motion.div
                key={item.id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-xl p-4 shadow-sm"
                >
                  {console.log("item.productName",item.productId.productName)}
                  {console.log("item.productId.image",item.productId.image)}
                  {console.log("item.productId.price",item.productId.price)}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.productId.image}
                      alt={item.productId.productName}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-[#0F497F] font-semibold text-lg">
                        {item.productId?.productName}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {/* ₹{item.price.toLocaleString()} × {item.qty} */}₹
                        {/* {item.productId?.price} */}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <p className="text-[#012C4F] font-semibold text-lg">
                      {/* ₹{(item.price * item.qty).toLocaleString()} */}₹
                      {item.productId?.price}
                    </p>
                    <button
                      // onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-600 transition"
                    >
                      <FaTrash
                        size={18}
                        onClick={() => removeFromCart(item.productId._id)}
                      />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary Section */}
            <div className="border-t mt-8 pt-6 flex justify-between items-center">
              <p className="text-lg font-semibold text-gray-700">
                Total:{" "} | Hey
                {/* <span className="text-primary">₹{total.toLocaleString()}</span> */}
              </p>
              <button className="bg-[#0F497F] text-white px-6 py-2 rounded-xl shadow-md hover:bg-[#012C4F] transition">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Cart;
