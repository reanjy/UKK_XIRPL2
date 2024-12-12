import React from 'react';

const AddAccount = () => {
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
        <h1 className="text-2xl font-bold mb-6">Add Account</h1>

        <form className="bg-white p-8 rounded shadow-md space-y-4 max-w-md">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
            <input type="text" id="firstName" className="mt-1 w-full p-2 border rounded" />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
            <input type="text" id="lastName" className="mt-1 w-full p-2 border rounded" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email ID</label>
            <input type="email" id="email" className="mt-1 w-full p-2 border rounded" />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input type="password" id="password" className="mt-1 w-full p-2 border rounded" />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
            <input type="password" id="confirmPassword" className="mt-1 w-full p-2 border rounded" />
          </div>

          <div>
            <label htmlFor="gender" className="block text-sm font-medium">Gender</label>
            <select id="gender" className="mt-1 w-full p-2 border rounded">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium">Age</label>
            <input type="number" id="age" className="mt-1 w-full p-2 border rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium">Type</label>
            <div className="mt-1 space-x-4">
              <label>
                <input type="radio" name="type" value="admin" className="mr-1" /> Admin
              </label>
              <label>
                <input type="radio" name="type" value="employee" className="mr-1" /> Employee
              </label>
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Register</button>
        </form>
      </main>
    </div>
  );
};

export default AddAccount;
