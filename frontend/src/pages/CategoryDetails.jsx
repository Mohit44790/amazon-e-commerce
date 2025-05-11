import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryDetails } from '../redux/slice/categorySlice';

const CategoryDetails = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const {
    categories = [],
    subcategories = [],
    subSubcategories = [],
    brands = [],
    loading,
    error
  } = useSelector(state => state.category);
  useEffect(() => {
    if (slug) dispatch(fetchCategoryDetails(slug));
  }, [slug, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{categories?.name}</h1>

      <h2 className="mt-4 font-semibold">Subcategories:</h2>
      <ul className="list-disc list-inside">
        {subcategories.map(cat => <li key={cat._id}>{cat.name}</li>)}
      </ul>

      <h2 className="mt-4 font-semibold">Sub-Subcategories:</h2>
      <ul className="list-disc list-inside">
        {subSubcategories.map(cat => <li key={cat._id}>{cat.name}</li>)}
      </ul>

      <h2 className="mt-4 font-semibold">Brands:</h2>
      <ul className="list-disc list-inside">
        {brands.map(brand => <li key={brand._id}>{brand.name}</li>)}
      </ul>
    </div>
  );
};

export default CategoryDetails;
