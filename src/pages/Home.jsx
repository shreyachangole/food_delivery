
import { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Card from "../components/Card";
import { food_items } from "../food";
import { DataContext } from "../contex/UserContex";
import Footer from "../components/Footer";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const {
    searchQuery,
    cartItems,
    isCartOpen,
    setIsCartOpen,
    checkoutCart,
  } = useContext(DataContext);

  const filteredItems = food_items.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" ||
      item.food_category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      item.food_name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Navbar />
      <Categories selected={selectedCategory} onSelect={setSelectedCategory} />

      <div className="px-6 py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {filteredItems.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>

     
      <div
        className={`fixed top-0 right-0 w-[350px] sm:w-[400px] h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
    
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold text-green-700">🍽️ My Plate</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-red-500 text-xl hover:text-red-700"
          >
            ✖
          </button>
        </div>


        <div
          className="p-4 overflow-y-auto"
          style={{ height: "calc(100% - 160px)" }}
        >
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b py-2"
              >
                <span className="text-gray-800 font-medium truncate max-w-[150px]">
                  {item.food_name}
                </span>
                <span className="text-green-600 font-semibold">₹{item.price}</span>
              </div>
            ))
          )}
        </div>

        
        <div className="absolute bottom-0 left-0 w-full p-4 border-t bg-white">
          <div className="flex justify-between mb-2 font-semibold text-gray-700">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
          <button
            onClick={checkoutCart}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            disabled={cartItems.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
