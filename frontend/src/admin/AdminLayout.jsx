import React from 'react';
import { Link, Links, NavLink, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  const menuItems = [
    { label: 'Dashboard', path: '/admin/dashboard' },
    { label: 'Products List', path: '/admin/products' },
    { label: 'Order List', path: '/admin/orders' },
    { label: 'Create Product', path: '/admin/product/create' },
    { label: 'Create Sales Product', path: '/admin/promotions/create' },
    { label: 'Update Product', path: '/admin/product/update/:id' },
    { label: 'Create Brand', path: '/admin/create-brand' },
    { label: 'Create Category', path: '/admin/create-category' },
    { label: 'All Users', path: '/admin/getuser' },
    { label: 'CategoryLists', path: `/admin/category/:slug` },
    { label: 'CategoryEdit', path: `/admin/categories/Edit` },
    { label: 'Brands', path: `/admin/brand` },
    { label: 'Create Gift Card', path: `/admin/giftcards/create` },
    { label: 'Create Grocery', path: `/admin/grocery/create` },
    { label: 'Grocery List', path: `/admin/groceries` },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 hidden md:block shadow-lg">
      <Link to={"/"}>  <h2 className="text-2xl font-bold mb-8 text-center">Admin Panel</h2></Link>
        <nav className="space-y-3">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded transition-colors ${
                  isActive ? 'bg-blue-600' : 'hover:bg-gray-700'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
