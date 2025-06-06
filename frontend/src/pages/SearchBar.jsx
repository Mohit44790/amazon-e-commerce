// src/components/SearchBar.jsx
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults, fetchUserSuggestions } from "../redux/slice/suggestionSlice";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const { searchResults, mySuggestions, loading } = useSelector(
    (state) => state.suggestion
  );

  useEffect(() => {
    dispatch(fetchUserSuggestions());
  }, [dispatch]);

  const debouncedSearch = useCallback(
    debounce((inputValue) => {
      if (!inputValue.trim()) {
        setSuggestions([]);
        setShowDropdown(false);
        return;
      }

      dispatch(fetchSearchResults(inputValue));

      const input = inputValue.toLowerCase();
      const combined = [...mySuggestions, ...searchResults];

      const filtered = combined.filter((item) => {
        const name = typeof item.name === "string" ? item.name.toLowerCase() : "";
        const brand = typeof item.brand === "string" ? item.brand.toLowerCase() : "";
        const category = typeof item.category === "string" ? item.category.toLowerCase() : "";

        return (
          name.includes(input) ||
          brand.includes(input) ||
          category.includes(input)
        );
      });

      setSuggestions(filtered);
      setShowDropdown(true);
    }, 300),
    [dispatch, mySuggestions, searchResults]
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  const handleSelect = (id) => {
    navigate(`/product/${id}`);
    setQuery("");
    setSuggestions([]);
    setShowDropdown(false);
  };

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchSearchResults(query));
      setShowDropdown(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const highlightMatch = (text) => {
    if (!query || typeof text !== "string") return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(
      regex,
      (match) => `<strong class="text-orange-400">${match}</strong>`
    );
  };

  return (
    <div className="w-full relative z-50">
      {/* Search Bar */}
      <div className="flex w-full bg-white rounded border border-gray-300 overflow-hidden">
        <div className="flex items-center px-3 bg-gray-100 text-black">
          <span className="flex items-center gap-1 text-sm">
            All <IoIosArrowDown />
          </span>
        </div>
        <input
          type="search"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search products..."
          className="flex-grow px-4 py-2 text-black outline-none"
          onFocus={() => query.length > 0 && setShowDropdown(true)}
        />
        <button
          onClick={handleSearch}
          className="bg-orange-400 p-2 text-black flex items-center justify-center"
        >
          <CiSearch size={22} />
        </button>
      </div>

      {/* Suggestion Dropdown */}
      {showDropdown && (
        <ul className="absolute z-20 mt-2 w-full max-h-64 overflow-y-auto bg-white text-black shadow-lg border border-gray-300 rounded-md">
          {loading ? (
            <li className="p-3 text-gray-500">Loading...</li>
          ) : suggestions.length > 0 ? (
            suggestions.map((item,index) => {
              const displayText = item.name || item.brand || item.category || "Unnamed";
              const type =
              item.name ? "product" :
              item.brand ? "brand" :
              item.category ? "category" : "unknown";
          
            const itemKey = `${type}-${item._id}-${index}`;
              return (
                <li
                  key={itemKey}
                  onClick={() => handleSelect(item._id)}
                  className="p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200"
                  dangerouslySetInnerHTML={{
                    __html: highlightMatch(displayText),
                  }}
                />
              );
            })
          ) : (
            <li className="p-3 text-gray-500">No results found.</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;



// <--------**************merge both offline and online searching*********************** -->

// src/components/SearchBar.jsx
// import { useDispatch, useSelector } from "react-redux";
// import { fetchSearchResults, fetchUserSuggestions } from "../redux/slice/suggestionSlice";
// import { useEffect, useState, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import { debounce } from "lodash";
// import { CiSearch } from "react-icons/ci";
// import { IoIosArrowDown } from "react-icons/io";
// import {
//   allProducts,
//   electronics,
//   electronicsItems,
//   products,
// } from '../Data/DataProduct';

// const SearchBar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [query, setQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);

//   const { searchResults, mySuggestions, loading } = useSelector(
//     (state) => state.suggestion
//   );

//   useEffect(() => {
//     dispatch(fetchUserSuggestions());
//   }, [dispatch]);

//   const debouncedSearch = useCallback(
//   debounce((inputValue) => {
//     if (!inputValue.trim()) {
//       setSuggestions([]);
//       setShowDropdown(false);
//       return;
//     }

//     dispatch(fetchSearchResults(inputValue));

//     const input = inputValue.toLowerCase();

//     const offlineCombined = [
//       ...allProducts,
//       ...electronics,
//       ...electronicsItems,
//       ...products,
//     ];

//     const onlineCombined = [...mySuggestions, ...searchResults];

//     const fullCombined = [...offlineCombined, ...onlineCombined];

//     const filtered = fullCombined.filter((item) => {
//       const name = typeof item.name === 'string' ? item.name.toLowerCase() : '';
//       const brand = typeof item.brand === 'string' ? item.brand.toLowerCase() : '';
//       const category = typeof item.category === 'string' ? item.category.toLowerCase() : '';
//       return (
//         name.includes(input) ||
//         brand.includes(input) ||
//         category.includes(input)
//       );
//     });

//     setSuggestions(filtered);
//     setShowDropdown(true);
//   }, 300),
//   [dispatch, mySuggestions, searchResults]
// );


//   const handleChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);
//     debouncedSearch(value);
//   };

//   const handleSelect = (id) => {
//     navigate(`/product/${id}`);
//     setQuery("");
//     setSuggestions([]);
//     setShowDropdown(false);
//   };

//   const handleSearch = () => {
//     if (query.trim()) {
//       dispatch(fetchSearchResults(query));
//       setShowDropdown(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   const highlightMatch = (text) => {
//     if (!query || typeof text !== "string") return text;
//     const regex = new RegExp(`(${query})`, "gi");
//     return text.replace(
//       regex,
//       (match) => `<strong class="text-orange-400">${match}</strong>`
//     );
//   };

//   return (
//     <div className="w-full relative z-50">
//       {/* Search Bar */}
//       <div className="flex w-full bg-white rounded border border-gray-300 overflow-hidden">
//         <div className="flex items-center px-3 bg-gray-100 text-black">
//           <span className="flex items-center gap-1 text-sm">
//             All <IoIosArrowDown />
//           </span>
//         </div>
//         <input
//           type="search"
//           value={query}
//           onChange={handleChange}
//           onKeyDown={handleKeyDown}
//           placeholder="Search products..."
//           className="flex-grow px-4 py-2 text-black outline-none"
//           onFocus={() => query.length > 0 && setShowDropdown(true)}
//         />
//         <button
//           onClick={handleSearch}
//           className="bg-orange-400 p-2 text-black flex items-center justify-center"
//         >
//           <CiSearch size={22} />
//         </button>
//       </div>

//       {/* Suggestion Dropdown */}
//       {showDropdown && (
//         <ul className="absolute z-20 mt-2 w-full max-h-64 overflow-y-auto bg-white text-black shadow-lg border border-gray-300 rounded-md">
//           {loading ? (
//             <li className="p-3 text-gray-500">Loading...</li>
//           ) : suggestions.length > 0 ? (
//             suggestions.map((item,index) => {
//               const displayText = item.name || item.brand || item.category || "Unnamed";
//               const type =
//               item.name ? "product" :
//               item.brand ? "brand" :
//               item.category ? "category" : "unknown";
          
//             const itemKey = `${type}-${item._id}-${index}`;
//               return (
//                 <li
//                   key={itemKey}
//                   onClick={() => handleSelect(item._id)}
//                   className="p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200"
//                   dangerouslySetInnerHTML={{
//                     __html: highlightMatch(displayText),
//                   }}
//                 />
//               );
//             })
//           ) : (
//             <li className="p-3 text-gray-500">No results found.</li>
//           )}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SearchBar;
