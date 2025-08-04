// Home.jsx
import { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Card from "../components/Card";
import { food_items } from "../food";
import { DataContext } from "../contex/UserContex";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { searchQuery } = useContext(DataContext); // 🔁 Access query

  const filteredItems = food_items.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" ||
      item.food_category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      item.food_name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Categories selected={selectedCategory} onSelect={setSelectedCategory} />
      <div className="px-6 py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {filteredItems.map((item) => (
          <Card key={item.id} data={item} />
        ))}

      </div>
    
    </div>
  );
}

export default Home;
