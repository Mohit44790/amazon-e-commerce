import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchGroceries } from "../redux/slice/grocerySlice";
import { useDispatch, useSelector } from "react-redux";

const GroceryDetails = () => {
  const { id } = useParams(); // Get the grocery ID from the URL
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!id) {
    return <div>Invalid grocery ID</div>; // Handle invalid ID
  }

  // Access groceries from the Redux store
  const { groceries } = useSelector((state) => state.grocery);
  const [grocery, setGrocery] = useState(null);

  // Fetch groceries on component mount
  useEffect(() => {
    dispatch(fetchGroceries()); // This fetches all groceries first
  }, [dispatch]);

  // Filter the selected grocery item when groceries are loaded
  useEffect(() => {
    if (groceries.length > 0 && id) {
      const selectedGrocery = groceries.find((grocery) => grocery._id === id);
      if (selectedGrocery) {
        setGrocery(selectedGrocery);
        setLoading(false);
      } else {
        setGrocery(null);
        setLoading(false);
      }
    }
  }, [groceries, id]);

  // Show loading state if still fetching
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show if the grocery item is not found
  if (!grocery) {
    return <div>Grocery not found!</div>;
  }

  return (
    <div className="grocery-details-container mx-4 mt-4">
      <button
        onClick={() => navigate("/")}
        className="text-blue-500 hover:underline mb-4"
      >
        Back to Groceries List
      </button>

      <div className="grocery-details bg-white p-4 rounded-lg shadow-lg">
        <div className="flex">
          <img
            src={grocery.images[0]} // Assuming you have multiple images
            alt={grocery.name}
            className="w-48 h-48 object-contain mr-4"
          />
          <div>
            <h1 className="text-3xl font-bold">{grocery.name}</h1>
            <p className="text-lg text-gray-700 mt-2">{grocery.description}</p>
            <p className="text-xl font-semibold text-black mt-4">₹{grocery.price}</p>
            <p className="text-sm text-gray-600 mt-2">Discount: {grocery.discount} OFF</p>
            <p className="text-sm text-gray-600 mt-1">Rating: ⭐ {grocery.ratting}</p>

            <div className="mt-4">
              <button
                onClick={() => {
                  // Implement add to cart functionality here
                }}
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Display more images if available */}
      {grocery.images.length > 1 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Other Images</h2>
          <div className="flex gap-4 mt-2">
            {grocery.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`grocery-image-${index}`}
                className="w-32 h-32 object-contain rounded"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GroceryDetails;
