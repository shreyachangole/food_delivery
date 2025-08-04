import {
  MdApps,
  MdLocalCafe,
  MdSoupKitchen,
  MdOutlineRamenDining,
  MdOutlineHome,
  MdLocalPizza,
  MdLunchDining,
} from "react-icons/md";

const categories = [
  { name: "all", icon: <MdApps size={28} /> },
  { name: "breakfast", icon: <MdLocalCafe size={28} /> },
  { name: "soups", icon: <MdSoupKitchen size={28} /> },
  { name: "pasta", icon: <MdOutlineRamenDining size={28} /> },
  { name: "main_course", icon: <MdOutlineHome size={28} /> },
  { name: "pizza", icon: <MdLocalPizza size={28} /> },
  { name: "burger", icon: <MdLunchDining size={28} /> },
];

function formatName(name) {
  return name
    .replace(/_/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function Categories({ selected, onSelect }) {
  console.log("onSelect is", typeof onSelect); 

  return (
    <div className="px-4 py-6 bg-[#f9f9f9]">
      <div className="flex flex-wrap justify-center items-center gap-5 max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => onSelect(cat.name)}
            className={`w-[110px] h-[110px] p-4 rounded-xl shadow-md flex flex-col items-center justify-center transition-all cursor-pointer
              ${
                selected === cat.name
                  ? "bg-green-100 shadow-xl scale-105 text-green-700"
                  : "bg-white hover:bg-green-50 text-green-600"
              }`}
          >
            <div>{cat.icon}</div>
            <span className="mt-2 text-sm font-semibold text-gray-700 text-center">
              {formatName(cat.name)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
