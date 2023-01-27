import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png"

function Header() {

  const NavLinks = [
    {name: 'Home', link:'#', id:1},
    {name: 'About', link:'#', id:2},
    {name: 'Technology', link:'#', id:3},
    {name: 'Projects', link:'#', id:4},
    {name: 'Contact', link:'#', id:5},
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return <div className="antialiased md:shadow w-full top-0 left-0">
    <div className="md:flex items-center justify-between bg-slate-900 text-white py-4 md:px-10 px-7">
      <div className="md:text-2xl text-xl cursor-pointer flex items-center">
        <img src={logo} alt="porfolio-logo" />
      </div>
      <div className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden select-none" onClick={()=> setMenuOpen(!menuOpen)}>
        <span>{menuOpen ? 'X' : '='}</span>
      </div>
      <ul className={`md:flex md:items-center md:pb-0 pb-3 absolute md:static bg-slate-900 md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${menuOpen ? 'top-19 opacity-100' : 'top-[-490px]'} md:opacity-100`}>
        {NavLinks.map((items) => {
          return <li key={items.id} className='md:ml-8 text-lg font-semibold md:my-0 my-7'>
            <a href={items.link} className='text-cyan-400 hover:text-cyan-500 duration-500'>{items.name}</a>
          </li>
        })}
      </ul>
    </div>
  </div>;
}

export default Header;
