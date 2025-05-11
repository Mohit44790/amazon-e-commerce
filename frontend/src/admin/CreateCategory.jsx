import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory, fetchCategories } from '../redux/slice/categorySlice';
import { createBrand } from '../redux/slice/brandSlice';
import { toast } from 'react-toastify';

const CreateCategory = () => {
  const dispatch = useDispatch();
  const { categories = [] } = useSelector(state => state.category);

  const [mainCategoryName, setMainCategoryName] = useState('');
  const [subCategoryName, setSubCategoryName] = useState('');
  const [parentCategory, setParentCategory] = useState('');
  const [subSubCategoryName, setSubSubCategoryName] = useState('');
  const [subCategoryParent, setSubCategoryParent] = useState('');
  const[loading,setLoading]=useState("")

  const [brandName, setBrandName] = useState('');
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCreateMainCategory = () => {
    setLoading(true);
    dispatch(createCategory({ name: mainCategoryName }))
      .unwrap()
      .then(() => toast.success("Category created"))
      .catch(err => toast.error(err))
      .finally(() => setLoading(false));
  };

  const handleCreateSubCategory = () => {
    dispatch(createCategory({ name: subCategoryName, parent: parentCategory }));
    setSubCategoryName('');
    setParentCategory('');
  };

  const handleCreateSubSubCategory = () => {
    dispatch(createCategory({ name: subSubCategoryName, parent: subCategoryParent }));
    setSubSubCategoryName('');
    setSubCategoryParent('');
  };

  const handleCreateBrand = () => {
    dispatch(createBrand({ name: brandName, categories: selectedCategoryIds }));
    setBrandName('');
    setSelectedCategoryIds([]);
  };

  useEffect(() => {
    console.log('Fetched Categories:', categories);
  }, [categories]);

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold">Manage Categories & Brands</h2>

      {/* Main Category */}
      <div>
        <h3 className="font-semibold">Main Category</h3>
        <input
          value={mainCategoryName}
          onChange={e => setMainCategoryName(e.target.value)}
          placeholder="Main Category Name"
          className="border p-2 mr-2"
        />
        <button disabled={loading} onClick={handleCreateMainCategory} className="bg-blue-500 text-white px-4 py-2 rounded">
        {loading ? 'Creating...' : 'Create'}
        </button>
      </div>

      {/* Sub Category */}
      <div>
        <h3 className="font-semibold">Sub Category</h3>
        <input
          value={subCategoryName}
          onChange={e => setSubCategoryName(e.target.value)}
          placeholder="Sub Category Name"
          className="border p-2 mr-2"
        />
        <select
          value={parentCategory}
          onChange={e => setParentCategory(e.target.value)}
          className="border p-2"
        >
          <option value="">Select Main Category</option>
          {categories.filter(c =>c && !c.parent).sort((a, b) => a.name.localeCompare(b.name)).map(cat => (
            <option key={cat._id} value={cat._id}>{cat.name}</option>
          ))}
        </select>
        <button onClick={handleCreateSubCategory} className="bg-green-500 text-white px-4 py-2 rounded ml-2">
          Create
        </button>
      </div>

      {/* Sub-Sub Category */}
      <div>
        <h3 className="font-semibold">Sub-Sub Category</h3>
        <input
          value={subSubCategoryName}
          onChange={e => setSubSubCategoryName(e.target.value)}
          placeholder="Sub-Sub Category Name"
          className="border p-2 mr-2"
        />
        <select
          value={subCategoryParent}
          onChange={e => setSubCategoryParent(e.target.value)}
          className="border p-2"
        >
          <option value="">Select Sub Category</option>
          {categories?.filter(c => c && c.parent).map(cat => (
  <option key={cat._id} value={cat._id}>{cat.name}</option>
))}
        </select>
        <button onClick={handleCreateSubSubCategory} className="bg-purple-500 text-white px-4 py-2 rounded ml-2">
          Create
        </button>
      </div>

      {/* Brand */}
      <div>
        <h3 className="font-semibold">Brand</h3>
        <input
          value={brandName}
          onChange={e => setBrandName(e.target.value)}
          placeholder="Brand Name"
          className="border p-2 mr-2"
        />
        <select
          multiple
          value={selectedCategoryIds}
          onChange={e =>
            setSelectedCategoryIds([...e.target.selectedOptions].map(option => option.value))
          }
          className="border p-2 w-full h-32"
        >
          {categories?.filter(c => c).map(cat => (
  <option key={cat._id} value={cat._id}>
    {cat.name}
  </option>
))}
        </select>
        <button onClick={handleCreateBrand} className="bg-yellow-500 text-white px-4 py-2 rounded mt-2">
          Create Brand
        </button>
      </div>
    </div>
  );
};

export default CreateCategory;
