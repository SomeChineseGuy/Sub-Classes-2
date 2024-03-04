import React from "react";

const Navbar = () => {
  return (
    <nav className='bg-green-600 p-6'>
      <div className="flex justify-between w-1/4 items-center">
        <h1 className="text-white text-3xl">Tiny App</h1>
        <a className="text-gray-500 hover:text-white" href="">Urls</a>
        <a className="text-gray-500 hover:text-white" href="">Create Urls</a>
      </div>
    </nav>
  )
};

export default Navbar;
