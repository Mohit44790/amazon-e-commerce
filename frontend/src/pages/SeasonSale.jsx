import { useEffect, useState } from 'react';
import axios from 'axios';


const SeasonSale = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/sales/season-sale')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Error loading season sale:', err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Season Sale</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SeasonSale;
