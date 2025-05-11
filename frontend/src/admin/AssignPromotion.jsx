import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AssignPromotion = () => {
  const [promotions, setPromotions] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedPromo, setSelectedPromo] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promoRes = await axios.get("http://localhost:8000/api/sales/all");
        const productRes = await axios.get("http://localhost:8000/api/products");

        setPromotions(promoRes.data);
        setProducts(Array.isArray(productRes.data) ? productRes.data : productRes.data.products || []);
      } catch (err) {
        toast.error("Failed to fetch data");
        console.error("Error fetching promotions/products:", err);
      }
    };
    fetchData();
  }, []);

  const handleAssign = async () => {
    try {
      await axios.post("http://localhost:8000/api/sales/assign", {
        promotionId: selectedPromo,
        productIds: selectedProducts,
      });
      toast.success("Products assigned to promotion!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Assignment failed");
      console.error("Error assigning promotion:", err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Assign Promotion to Products</h2>

      <select
        onChange={(e) => setSelectedPromo(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
      >
        <option value="">-- Select Promotion --</option>
        {promotions.map((promo) => (
          <option key={promo._id} value={promo._id}>
            {promo.name} ({promo.type})
          </option>
        ))}
      </select>

      <div className="h-64 overflow-y-scroll border p-2 rounded space-y-2">
        {Array.isArray(products) &&
          products.map((prod) => (
            <label key={prod._id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={prod._id}
                onChange={(e) => {
                  const id = e.target.value;
                  setSelectedProducts((prev) =>
                    e.target.checked ? [...prev, id] : prev.filter((p) => p !== id)
                  );
                }}
              />
              <span>{prod.name}</span>
            </label>
          ))}
      </div>

      <button
        onClick={handleAssign}
        disabled={!selectedPromo || selectedProducts.length === 0}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Assign
      </button>
    </div>
  );
};

export default AssignPromotion;
