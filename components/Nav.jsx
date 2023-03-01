import React from "react";

const Nav = () => {
  return (
    <nav className="flex w-full px-4 py-4 items-center">
      <h2 className="text-3xl mr-6">Anna Prost Tutoring</h2>
      <ul className="flex-1 flex">
        <li className="px-4">
          <a href="#">About</a>
        </li>
        <li className="px-4">
          <a href="#">Services</a>
        </li>
        <li className="px-4">
          <a href="#">Blog</a>
        </li>
        <li className="px-4">
          <a href="#">Contact</a>
        </li>
      </ul>
      <button className="bg-primary py-5 px-9 text-white hover:bg-primary-600 duration-300">
        Get Started
      </button>
    </nav>
  );
};

export default Nav;
