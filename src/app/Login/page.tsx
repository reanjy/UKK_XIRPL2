import Pict from '@/assets/Pict Inventory.png';
import Image from 'next/image';
import Navbar from '@/Login/navbar';
function Login() {
  return (
    <>
      <Navbar/>
      <div className="flex justify-center items-center h-screen p-5 bg-blue-50 relative">
        <div className="absolute top-8">
          <div className="bg-white grid md:grid-cols-2 grid-cols-1 border rounded-lg shadow-lg max-w-3xl w-full">
            {/* Logo Section */}
            <div className="flex justify-center items-center p-10 bg-white">
              <Image src={Pict} alt="Inventory Logo" className="w-3/4 h-auto object-contain rounded-l-lg" />
            </div>

            {/* Form Section */}
            <div className="flex flex-col justify-center p-10">
              <form action="">
                <h1 className="text-gray-800 text-center mb-6 font-bold text-3xl">
                  Login
                </h1>
                <input
                  type="text"
                  className="bg-gray-100 border outline-none rounded-md py-2 px-4 w-full mb-4"
                  placeholder="Username"
                />
                <input
                  type="password"
                  className="bg-gray-100 border outline-none rounded-md py-2 px-4 w-full mb-6"
                  placeholder="Password"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md py-2 px-4 w-full mb-4"
                >
                  Login
                </button>
                <p className="text-center text-gray-500">
                  New user? <a href="#" className="text-blue-600 hover:underline">Register</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
