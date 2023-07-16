import React, { useState } from "react";



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0b0a2f] text-white">
      <p>سراشپز</p>
      
    </div>
  );
};

export default Navbar;
