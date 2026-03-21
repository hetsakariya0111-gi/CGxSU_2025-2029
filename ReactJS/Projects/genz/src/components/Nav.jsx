import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong, FaBars, FaXmark } from 'react-icons/fa6'

export default function Nav() {

    const [showMenu, setMenu] = useState(false);

  return (
    <div className="w-full fixed top-0 z-50 backdrop-blur-2xl">
      <div className="flex items-center justify-between px-6 py-8 sm:px-12 md:px-24 lg:px-40 border-2">

            {/* Logo section */}
            <Link to="/" className="flex items-center gap-2">
                <span className="text-2xl font-bold">Gen-Z</span>
                <div className="w-4 h-4 bg-amber-500 border-2 rounded-full"></div>
            </Link>

            {/* Nav bar section */}
            <div className="hidden sm:flex items-center justify-between space-x-8 font-semibold">
                <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
                <Link to="/about" className="hover:text-amber-400 transition-colors">About</Link>
                <Link to="/career" className="hover:text-amber-400 transition-colors">Career</Link>
                <a href="#Support" className="hover:text-amber-400 transition-colors">Support</a>
            </div>

            {/* Contact us */}
            <div className="hidden sm:block">
               <button className="px-3 py-1 flex items-center gap-3 bg-amber-300 rounded-full hover:bg-amber-400 transition-colors">
                    Contact us
                    <FaArrowRightLong/>
                </button>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setMenu(!showMenu)} className="sm:hidden text-2xl">
                {showMenu ? <FaXmark /> : <FaBars />}
            </button>
      </div>

      {/* Mobile dropdown menu */}
      {showMenu && (
        <div className="sm:hidden flex flex-col gap-4 px-6 pb-6 pt-2 border-t border-white/10 bg-[#0f172a]/95 font-semibold">
            <Link to="/" onClick={() => setMenu(false)} className="hover:text-amber-400 transition-colors">Home</Link>
            <Link to="/about" onClick={() => setMenu(false)} className="hover:text-amber-400 transition-colors">About</Link>
            <Link to="/career" onClick={() => setMenu(false)} className="hover:text-amber-400 transition-colors">Career</Link>
            <a href="#Support" onClick={() => setMenu(false)} className="hover:text-amber-400 transition-colors">Support</a>
            <button className="px-3 py-1 flex items-center gap-3 bg-amber-300 rounded-full w-fit">
                Contact us <FaArrowRightLong/>
            </button>
        </div>
      )}
    </div>
  )
}