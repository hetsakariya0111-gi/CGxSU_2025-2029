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

            <div className="hidden sm:flex items-center justify-between space-x-8 font-semibold text-slate-700">
                <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
                <Link to="/about" className="hover:text-amber-500 transition-colors">About</Link>
                <Link to="/career" className="hover:text-amber-500 transition-colors">Career</Link>
                <Link to="/support" className="hover:text-amber-500 transition-colors">Support</Link>
            </div>

            {/* Contact us */}
            <div className="hidden sm:block">
               <button className="px-5 py-2 flex items-center gap-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors font-bold shadow-md shadow-slate-900/10 active:scale-95">
                    Contact us
                    <FaArrowRightLong className="group-hover:translate-x-1 transition-transform"/>
                </button>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setMenu(!showMenu)} className="sm:hidden text-2xl text-slate-800 hover:text-amber-500 transition-colors">
                {showMenu ? <FaXmark /> : <FaBars />}
            </button>
      </div>

      {/* Mobile dropdown menu */}
      {showMenu && (
        <div className="sm:hidden flex flex-col gap-4 px-6 pb-6 pt-2 border-t border-slate-100 bg-white/95 font-semibold text-slate-800 shadow-xl rounded-b-3xl mt-2 animate-in slide-in-from-top-2 duration-200">
            <Link to="/" onClick={() => setMenu(false)} className="hover:text-amber-500 transition-colors py-2 border-b border-slate-100">Home</Link>
            <Link to="/about" onClick={() => setMenu(false)} className="hover:text-amber-500 transition-colors py-2 border-b border-slate-100">About</Link>
            <Link to="/career" onClick={() => setMenu(false)} className="hover:text-amber-500 transition-colors py-2 border-b border-slate-100">Career</Link>
            <Link to="/support" onClick={() => setMenu(false)} className="hover:text-amber-500 transition-colors py-2 border-b border-slate-100">Support</Link>
            <button className="mt-2 px-5 py-3 flex items-center justify-center gap-3 bg-amber-400 text-slate-900 rounded-xl w-full font-bold shadow-md shadow-amber-400/20 active:scale-95">
                Contact us <FaArrowRightLong/>
            </button>
        </div>
      )}
    </div>
  )
}