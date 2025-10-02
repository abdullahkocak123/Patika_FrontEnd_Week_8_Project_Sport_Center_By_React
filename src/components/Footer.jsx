import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[var(--background-color-blue)]">
      <div className="w-3/4 mx-auto text-white text-sm">
        {/* Logo */}
        <img src="images/logo.png" alt="logo" className="w-40 h-auto" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
          veritatis enim et a dolore est, hic minima alias asperiores accusamus
          qui earum eveniet porro optio consequatur nisi obcaecati! Facilis amet
          quo excepturi eos sint?
        </p>
        <div className="flex justify-around my-3">
          <ul className="my-2">
            <li className="text-xl font-bold">Information</li>
            <li className="my-1">About Us</li>
            <li className="my-1">Classes</li>
            <li className="my-1">Blog</li>
            <li className="my-1">Contact</li>
          </ul>
          <ul className="my-2">
            <li className="text-xl font-bold">Helpful Links</li>
            <li className="my-1">Services</li>
            <li className="my-1">Supports</li>
            <li className="my-1">Terms & Condition</li>
            <li className="my-1">Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
