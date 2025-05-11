import { useEffect, useState } from "react";
import axios from "axios";
import AssignPromotion from "./AssignPromotion";
import ViewAssignedProducts from "./ViewAssignedProducts";

const PromotionList = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/sales/all")
      .then((res) => setPromotions(res.data))
      .catch((error) => console.error("Error fetching promotions:", error));
  }, []);

  return (
    <>
      <div className="max-w-3xl mx-auto p-4 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-4">All Promotions</h2>
        <table className="w-full table-auto border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Type</th>
              <th className="p-2 border">Start Date</th>
              <th className="p-2 border">End Date</th>
              <th className="p-2 border">Active</th>
            </tr>
          </thead>
          <tbody>
            {promotions.length > 0 ? (
              promotions.map((promo) => (
                <tr key={promo._id}>
                  <td className="p-2 border">{promo.name}</td>
                  <td className="p-2 border">{promo.type}</td>
                  <td className="p-2 border">{new Date(promo.startDate).toLocaleDateString()}</td>
                  <td className="p-2 border">{new Date(promo.endDate).toLocaleDateString()}</td>
                  <td className="p-2 border">{promo.isActive ? "Yes" : "No"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4">No promotions found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <AssignPromotion />
      <ViewAssignedProducts />
    </>
  );
};

export default PromotionList;
