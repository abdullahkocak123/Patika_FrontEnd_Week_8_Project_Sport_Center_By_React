import React from "react";

function Header() {
  return (
    <header
      id="header"
      className="fixed top-0 left-0 right-0 w-3/4 mx-auto z-50 transition-colors duration-300"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* <!-- Logo --> */}
        <img src="images/logo.png" alt="logo" />

        {/* <!-- Menü --> */}
        <nav
          id="nav-menu"
          className="hidden sm:flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 bg-white sm:bg-transparent p-4 sm:p-0"
        >
          <a href="#" className="text-white font-bold">
            Home
          </a>
          <a href="#classes" className="text-white font-bold">
            classes
          </a>
          <a href="#trainers" className="text-white font-bold">
            Trainer
          </a>
          <a href="#review" className="text-white font-bold">
            Review
          </a>
          <a href="#contact" className="text-white font-bold">
            Contact
          </a>
          <button className="text-white bg-[var(--background-color-orange)] font-bold px-2 rounded">
            JOIN US
          </button>
        </nav>
        {/* <!-- Hamburger Menu --> */}
        <button id="menu-btn" className="sm:hidden text-5xl text-white">
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;
