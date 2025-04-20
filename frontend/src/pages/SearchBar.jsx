// // components/SearchBar.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { electronics } from '../Data/DataProduct';


// const SearchBar = () => {
//   const [query, setQuery] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);

//     if (value.trim() === '') {
//       setSuggestions([]);
//     } else {
//       const filtered = electronics.filter((item) =>
//         item.brand.toLowerCase().includes(value.toLowerCase()) ||
//         item.category.toLowerCase().includes(value.toLowerCase())
//       );
//       setSuggestions(filtered);
//     }
//   };

//   const handleSelect = (id) => {
//     setQuery('');
//     setSuggestions([]);
//     navigate(`/product/${id}`);
//   };

//   return (
//     <div className="relative w-full max-w-md mx-auto">
//       <input
//         type="text"
//         value={query}
//         onChange={handleChange}
//         placeholder="Search for a product..."
//         className="w-full p-2 border rounded"
//       />
//       {suggestions.length > 0 && (
//         <ul className="absolute z-10 w-full bg-white text-black shadow-md border rounded mt-1">
//           {suggestions.map((item) => (
//             <li
//               key={item.id}
//               onClick={() => handleSelect(item.id)}
//               className="p-2 hover:bg-gray-100 cursor-pointer"
//             >
//               {item.brand}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SearchBar;
