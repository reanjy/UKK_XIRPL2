
function UserTable() {
    const users = [
      { name: 'Pat Black', accessStatus: 'Admin', email: 'bill.berry@example.com', age: 28 },
      { name: 'Angel Jones', accessStatus: 'Admin', email: 'glen.ramirez@example.com', age: 36 },
      { name: 'Max Edwards', accessStatus: 'Employee', email: 'renee.hughes@example.com', age: 27 },
      { name: 'Bruce Fox', accessStatus: 'Employee', email: 'craig.kelley@example.com', age: 43 },
      { name: 'Devon Fisher', accessStatus: 'Employee', email: 'joy.ramos@example.com', age: 32 },
    ];
  
    return (
      <div className="bg-blue-50 min-h-screen px-10 py-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Header Section */}
          <header className="flex justify-between items-center pb-4 border-b mb-4">
            <h1 className="text-lg font-bold text-gray-800">All User</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">Add</button>
          </header>
  
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-200">
              <thead className="bg-blue-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-600 font-medium">Name</th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-600 font-medium">Access Status</th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-600 font-medium">Email</th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-600 font-medium">Age</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="even:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2 text-gray-800">{user.name}</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800">{user.accessStatus}</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800">{user.email}</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800">{user.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  
  export default UserTable;
  