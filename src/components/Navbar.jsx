// Navbar.jsx
import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { MdShoppingBag } from "react-icons/md";
import { FaUtensils } from "react-icons/fa";
import { DataContext } from "../contex/UserContex";

function Navbar() {
  const { searchQuery, setSearchQuery } = useContext(DataContext); // 🔁 Use context

  return (
    <nav className="bg-white px-4 py-2 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="p-2 rounded-lg bg-green-100">
          <FaUtensils className="text-green-600 w-5 h-5" />
        </div>

        <div className="flex-1 mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search your dish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // 🔁 Update query
              className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <FiSearch className="absolute left-3 top-2.5 text-green-500 w-5 h-5" />
          </div>
        </div>

        <div className="relative p-2 bg-gray-100 rounded-full hover:shadow transition">
          <MdShoppingBag className="text-green-600 w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] px-1.5 rounded-full font-bold">
            0
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
