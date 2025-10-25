import { useContext } from "react";
import { CartContext } from "../provider/CartContext";
import { Link } from "react-router";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

   if (!cartItems || cartItems.length === 0)
    return (
     <div className=" min-h-screen bg-gradient-to-tr from-blue-100 via-white to-cyan-100 ">
      <div className="text-center  py-10">
        <p className="font-bold text-[40px]">Your cart is empty</p>
        <Link to="/" className="text-blue-500 underline mt-4 block">
          Go back to Toys
        </Link>
      </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100 py-10">
    <div className="max-w-5xl mx-auto mt-10 ">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart 🛒</h1>
      <Link to='/' className="font-bold mb-5 text-[20px] text-amber-600">Go back to Toys</Link>
      <ul className="space-y-4">
        {cartItems.map((toy) => (
          <li key={toy.id} className="flex items-center justify-between border p-4 rounded-lg">
            <div>
              <h2 className="font-semibold text-lg">{toy.toyName}</h2>
              <p className="text-sm text-gray-600">{toy.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(toy.id)}
              className="btn btn-outline btn-error btn-sm"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Cart;
