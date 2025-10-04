import React from 'react';

const Navbar = () => {
    return (
        <div className='mx-10'>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between container mx-auto mt-5">
      <h2 className="font-bold text-xl">CS — Ticket System</h2>
      <div className="flex gap-3">
        <div>
          <nav className="gap-2 mt-1">
            <ul className="flex gap-3 text-xs">
              <li>
                <a href="">Home</a>
              </li>
              <li><a href="">FAQ</a></li>
              <li> <a href="">Changelog</a></li>
              <li><a href="">Blog</a></li>
              <li> <a href="">Download</a></li>
              <li><a href="">Contact</a></li>
            </ul>

          </nav>
        </div>
        <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-2 py-2 text-white font-bold  text-xs">+ New Ticket</button>
      </div>
    </div>
        </div>
    );
};

export default Navbar;