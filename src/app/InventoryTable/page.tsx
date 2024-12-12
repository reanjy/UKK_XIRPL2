import React from 'react';

const InventoryTable = () => {
  const products = [
    { name: 'Table', series: 'TJ0001', items: 25, purchaseDate: '11 Januari 2022', price: '450.000' },
    { name: 'Chair', series: 'TJ0002', items: 66, purchaseDate: '11 Januari 2022', price: '325.000' },
    { name: 'Laptop', series: 'TJ0015', items: 120, purchaseDate: '21 Juni 2022', price: '11.750.000' },
    { name: 'Monitor', series: 'TJ1212', items: 20, purchaseDate: '15 April 2022', price: '12.335.000' },
    { name: 'Keyboard', series: 'TJ0021', items: 15, purchaseDate: '24 Desember 2024', price: '357.600' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-500 text-white p-6">
        <div className="text-xl font-bold mb-6">PT. TEKNO JAYA</div>
        <nav className="space-y-4">
          <a href="#" className="block hover:bg-blue-600 p-2 rounded">Home</a>
          <a href="#" className="block hover:bg-blue-600 p-2 rounded">Inventory</a>
          <a href="#" className="block hover:bg-blue-600 p-2 rounded">All Account</a>
          <a href="#" className="block hover:bg-blue-600 p-2 rounded">Transactions</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Inventory</h1>

        <div className="bg-white p-4 rounded shadow-md">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Product Name</th>
                <th className="border border-gray-300 px-4 py-2">Series No.</th>
                <th className="border border-gray-300 px-4 py-2">Items</th>
                <th className="border border-gray-300 px-4 py-2">Purchase Date</th>
                <th className="border border-gray-300 px-4 py-2">Unit Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.series}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.items}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.purchaseDate}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default InventoryTable;
