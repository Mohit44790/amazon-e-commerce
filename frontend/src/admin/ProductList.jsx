import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { deleteProduct, fetchProducts } from '../redux/slice/productSlice';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteProduct(id));
    }
  };

  const exportToExcel = () => {
    const newData = items.map((p, index) => ({
      Date: new Date().toLocaleDateString(),
      SNo: index + 1,
      ID: p._id,
      Name: p.name,
      Stock: p.stock,
      Category: p.category.name,
      Sizes: p.sizes?.join(', '),
      Colors: p.colors?.join(', '),
      Price: p.price,
    }));
  
    // Get previous data from localStorage
    const prevData = JSON.parse(localStorage.getItem('excelData')) || [];
  
    // Merge old + new
    const mergedData = [...prevData, ...newData];
  
    // Save back to localStorage
    localStorage.setItem('excelData', JSON.stringify(mergedData));
  
    // Create and export the Excel file
    const worksheet = XLSX.utils.json_to_sheet(mergedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Products');
  
    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
  
    const file = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(file, 'products.xlsx');
  };
  

  return (
    <div className="p-2">
      <div className='flex justify-between'>

      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      <button
        onClick={exportToExcel}
        className="mb-4 px-4 py-2 bg-green-500 hover:bg-green-400 text-white rounded"
        >
        Export to Excel
      </button>
        </div>
      {loading && <p>Loading...</p>}
      <table className="w-full text-left border">
        <thead>
          <tr className="border-b text-center justify-between ">
            
            <th className='border'>Images</th>
            <th className='border'>S.No</th>
            <th className='border'>Name</th>
            <th className='border'>Stock</th>
            <th className='border'>Category</th>
            <th className='border'>Sizes</th>
            <th className='border'>Colors</th>

            <th className='border'>Price</th>
            <th className='border'> Stock</th>
            <th className='border'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((p,index) => (
            <tr key={p._id} className="border-b text-center  justify-evenly">
             <img src={p.images[0]} className='w-20 my-2 rounded border mx-2' alt={p.name} />
              <td className='border' >{index + 1}</td>
              <td className='border'>{p.name}</td>
              <td className='border'>{p.stock}</td>
              <td className='border'>{p.category.name}</td>
              <td className='border'>{p.sizes}</td>
              <td className='border'>{p.colors}</td>
             
             
              <td className='border'>₹{p.price}</td>
              <td className='border'>{p.stock}</td>
              <td className="space-x-2 border">
                <Link to={`/admin/product/update/${p._id}`} className="text-blue-500">Edit</Link>
                <button onClick={() => handleDelete(p._id)} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
