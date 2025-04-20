import React from 'react';
import { freshProducts } from '../Data/freshProducts';

const CategoryContent = ({ selected }) => {
  const products = freshProducts[selected] || [];

  if (products.length === 0) {
    return <p className="text-gray-500">No products available for {selected}.</p>;
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {products.map((item) => (
        <div
          key={item.id}
          className="border p-4 rounded shadow hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-green-600 font-medium">{item.price}</p>
          <button className="mt-2 px-3 py-1 bg-green-500 text-white rounded">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoryContent;
