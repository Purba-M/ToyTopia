import React, { useContext } from "react";
import { useNavigate } from "react-router";

import toast from "react-hot-toast";
import { CartContext } from "../provider/CartContext";

const ToyDetailsCard = ({ toy }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);


  if (!toy)
    return (
      <p className="text-center mt-20 text-gray-500">Loading toy details...</p>
    );

  const { thumbnail, name, description, price, rating, category, availableQuantity, sellerName } = toy;

  const handleAddToCart = () => {
    addToCart(toy);
    toast.success("Added to cart 🛒");
    navigate("/cart");
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={thumbnail}
            className="rounded-lg shadow-md w-full h-[400px] object-cover"
            alt={name}
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">{name}</h1>
          <p className="text-black mb-3 text-sm uppercase tracking-wide font-semibold text-[30px]">
            Category: <span className="text-emerald-600 font-semibold">{category}</span>
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>

          <ul className="text-gray-700 space-y-1 mb-6">
            <li>⭐ Rating: {rating}</li>
            <li>📦 Available Stock: {availableQuantity}</li>
            <li>👤 Seller: {sellerName}</li>
          </ul>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold text-emerald-600">{price}</span>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="btn btn-outline text-rose-600"
            >
              Add to Cart
            </button>

            <button
              onClick={() => navigate("/")}
              className="border border-emerald-600 text-emerald-600 px-6 py-2 rounded-lg hover:bg-emerald-50 transition cursor-pointer"
            >
              Back to Toys
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetailsCard;
