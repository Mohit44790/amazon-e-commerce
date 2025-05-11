import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ViewAssignedProducts = () => {
  const [products, setProducts] = useState([]);
  const [filterType, setFilterType] = useState("All");

  const fetchAssignedProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/sales/assigned-products");
      setProducts(res.data);
    } catch (error) {
      toast.error("Failed to fetch assigned products.");
      console.error("Error fetching assigned products:", error);
    }
  };

  useEffect(() => {
    fetchAssignedProducts();
  }, []);

  const handleRemovePromotion = async (productId) => {
    try {
      await axios.put(`http://localhost:8000/api/sales/remove-promotion/${productId}`);
      toast.success("Promotion removed!");
      fetchAssignedProducts(); // Refresh list
    } catch (error) {
      toast.error("Failed to remove promotion.");
      console.error("Error removing promotion:", error);
    }
  };

  const filteredProducts = filterType === "All"
    ? products
    : products.filter((p) => p.promotion?.type === filterType);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Assigned Promotion Products</h2>

      <div className="mb-4">
        <label className="mr-2 font-medium">Filter by Type:</label>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border px-3 py-1 rounded"
        >
          <option value="All">All</option>
          <option value="Season Sale">Season Sale</option>
          <option value="Today Deal">Today Deal</option>
        </select>
      </div>

      <table className="w-full border border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Product</th>
            <th className="border p-2">Promotion</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Start Date</th>
            <th className="border p-2">End Date</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center p-4">No products found.</td>
            </tr>
          ) : (
            filteredProducts.map((product) => (
              <tr key={product._id} className="text-center">
                <td className="border p-2">{product.name}</td>
                <td className="border p-2">{product.promotion?.name}</td>
                <td className="border p-2">{product.promotion?.type}</td>
                <td className="border p-2">{new Date(product.promotion?.startDate).toLocaleDateString()}</td>
                <td className="border p-2">{new Date(product.promotion?.endDate).toLocaleDateString()}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleRemovePromotion(product._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAssignedProducts;
