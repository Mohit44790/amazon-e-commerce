import React from "react";
import MegaMenuelectronics from "./MegaMenuelectronics";
import { homeTheater } from "../../Data/ElectronicData";
import { useNavigate } from "react-router";

const HomeTheater = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    if (path && path.trim() !== "") {
      navigate(path);
    } else {
      alert("No path available for this item.");
    }
  };
  return (
    <div>
      <MegaMenuelectronics />

      <div className="flex flex-col md:flex-row">
        <aside className="w-56 border-r p-4"></aside>

        <main className="w-full p-4">
          <h1>Featured categories</h1>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {homeTheater.map((item, index) => (
              <div
                key={item.id || index}
                className="group relative h-56  ease-in-out transform  transition-all  duration-1000 flex flex-col items-center justify-start overflow-hidden"
              >
                {/* Image */}
                <div className="h-56 flex items-center  justify-center group-hover:-mt-14  overflow-hidden">
                  <div className="h-44 w-44 bg-gray-100 group-hover:w-28 group-hover:h-28  flex items-center justify-center rounded-full overflow-hidden ">
                    <img
                      src={item.image}
                      alt={item.name}
                      onClick={() => handleNavigate(item.path)}
                      className="transition-transform duration-500 w-32 cursor-pointer  mix-blend-darken object-cover hover:top-1  transform group-hover:scale-50"
                    />
                  </div>
                </div>
                {/* Title */}
                <h2 className="text-center cursor-pointer font-semibold text-sm mt-2 group-hover:border-b text-gray-800 transition-all duration-300 group-hover:-mt-14 group-hover:text-black">
                  {item.name}
                </h2>
                {/* Subcategories — absolutely positioned so card height is fixed */}
                <div className="absolute bottom-4 left-0 right-0 px-2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out transform group-hover:-translate-y-2 flex flex-col items-center space-y-1 pointer-events-none group-hover:pointer-events-auto">
                  {item.category?.map(
                    (cat, index) =>
                      cat?.name &&
                      cat?.path && (
                        <button
                          key={index}
                          onClick={() => handleNavigate(cat.path)}
                          className="text-xs text-blue-600 underline hover:text-blue-800"
                        >
                          {cat.name}
                        </button>
                      )
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomeTheater;
