import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchBrands,
  deleteBrand,
  updateBrand,
  createBrand,
} from '../redux/slice/brandSlice';
import { fetchCategories } from '../redux/slice/categorySlice'; // Make sure you have this action

const BrandPage = () => {
  const dispatch = useDispatch();
  const { brands } = useSelector((state) => state.brand);
  const { categories } = useSelector((state) => state.category); // Make sure categorySlice is in your store

  const [form, setForm] = useState({
    name: '',
    slug: '',
    categories: [],
    logo: null,
  });
  const [editingId, setEditingId] = useState(null);
  const [existingLogo, setExistingLogo] = useState(null);

  useEffect(() => {
    dispatch(fetchBrands());
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value, files, options } = e.target;

    if (name === 'logo') {
      setForm((prev) => ({ ...prev, logo: files[0] }));
    } else if (name === 'categories') {
      const selected = Array.from(options)
        .filter((o) => o.selected)
        .map((o) => o.value);
      setForm((prev) => ({ ...prev, categories: selected }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('slug', form.slug);
    formData.append('categories', JSON.stringify(form.categories));
    if (form.logo) formData.append('logo', form.logo);

    if (editingId) {
      dispatch(updateBrand({ id: editingId, formData }));
    } else {
      dispatch(createBrand(formData));
    }

    setForm({ name: '', slug: '', categories: [], logo: null });
    setEditingId(null);
    setExistingLogo(null);
  };

  const handleEdit = (brand) => {
    setForm({
      name: brand.name,
      slug: brand.slug || '',
      categories: brand.categories?.map((c) =>
        typeof c === 'object' ? c._id : c
      ) || [],
      logo: null,
    });
    setExistingLogo(brand.logo || null);
    setEditingId(brand._id);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteBrand(id));
    }
  };

  const getCategoryNameById = (id) => {
    const cat = categories.find((c) => c._id === id);
    return cat ? cat.name : id;
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Manage Brands</h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 border p-4 rounded shadow mb-6 bg-white"
      >
        <input
          type="text"
          name="name"
          placeholder="Brand Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          name="slug"
          placeholder="Slug (optional)"
          value={form.slug}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <select
          name="categories"
          multiple
          value={form.categories}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          {categories.map((cat) => (
            <option key={cat._id}  value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>

        <div className="flex items-center gap-4">
          <input
            type="file"
            name="logo"
            accept="image/*"
            onChange={handleChange}
            className="border p-2 flex-1"
          />
          {existingLogo && !form.logo && (
            <img
              src={existingLogo}
              alt="Existing Logo"
              className="w-16 h-16 object-contain"
            />
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {editingId ? 'Update Brand' : 'Create Brand'}
        </button>
      </form>

      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Slug</th>
            <th className="border p-2">Categories</th>
            <th className="border p-2">Logo</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand) => (
            <tr key={brand._id}>
              <td className="border p-2">{brand.name}</td>
              <td className="border p-2">{brand.slug}</td>
              <td className="border p-2">
                {brand.categories?.map((c, idx) => {
                  const name = typeof c === 'object' ? c.name : getCategoryNameById(c);
                  return (
                    <div key={idx} className="bg-gray-50 rounded px-2 py-1 mb-1">
                      {name}
                    </div>
                  );
                })}
              </td>
              <td className="border p-2">
                {brand.logo && (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-16 h-16 object-contain"
                  />
                )}
              </td>
              <td className="border p-2 space-x-2">
                <button
                  onClick={() => handleEdit(brand)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(brand._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrandPage;
