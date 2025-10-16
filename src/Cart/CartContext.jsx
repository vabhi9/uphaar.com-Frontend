// CartContext.jsx
import { useEffect } from "react";
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import UserContext from "../Context/UserContext";

const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { user } = useContext(UserContext);

  // const user = JSON.parse(sessionStorage.getItem("userData")); // retrieve user object

  const userId = user?._id; // safely get _i`d
  // const userEmail = user.email;
  // console.log("userEmail", userEmail);
  console.log("Context User is", user);
  console.log("userId Here", userId);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        // const user = JSON.parse(sessionStorage.getItem("userData"));
        // if (!user?._id) return;
        if (!userId) {
          console.log("Sorry User Id isn't here");
          return;
        }

        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/cart/${userId}`
        );
        console.log("res of Cart", res);
        setCart(res.data.items || []); // Set cart in React state
      } catch (err) {
        console.error(
          "Error fetching cart:",
          err.response?.data || err.message
        );
      }
    };

    fetchCart();
  }, [userId]);

  const addToCart = async (item) => {
    const isAlreadyInCart = cart.some((cartItem) => cartItem._id === item._id);
    if (isAlreadyInCart) {
      console.log("Item already in cart!");
      toast.warning("Item is already in the cart! 🛒", { autoClose: 2000 });
      return; // ✅ Don’t return the toast itself
    }

    if (!userId) {
      alert(
        "It Seems Like You are trying to Put items in cart Without Registrain and login"
      );
    }
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/cart/add`,
        {
          userId,
          productId: item._id,
          quantity: 1,
        }
      );

      if (res.status === 200) {
        setCart((prev) => [...prev, item]);
        toast.success("Item added to cart! 🛒", { position: "top-right" });
      }
    } catch (error) {
      console.error(
        "Error adding to cart:",
        error.response?.data || error.message
      );
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/api/cart/remove`,
        { data: { userId, productId } } // pass userId in body
      );

      if (res.status === 200) {
        // setCart(prev => prev.filter(item => item._id !== productId));
        setCart(res.data.items);
        toast.success("Item removed from cart 🗑️", { position: "top-right" });
      }
    } catch (error) {
      console.error(
        "Error removing item:",
        error.response?.data || error.message
      );
    }
  };

  const clearCart = async () => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/api/cart/clear`,
        {
          data: { userId }, // pass userId from sessionStorage
        }
      );

      if (res.status === 200) {
        setCart([]);
        toast.success("Cart cleared successfully 🗑️", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error(
        "Error clearing cart:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, setCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
