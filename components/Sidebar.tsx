// components/Sidebar.tsx
import Link from "next/link"
import clsx from "clsx";

import { BsCheck2 } from "react-icons/bs";
import { FiHome, FiUser, FiPackage, FiMail, FiBookmark, FiAward, FiX } from "react-icons/fi";

import { Footer } from "../components/Footer";

export function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const tags = [
    "Human Capital",
    "People Development",
    "HR Analytics",
    "HRIS",
    "Continous Improvement",
    "HR Data Science",
  ];
    
  return (
    <aside className={clsx(
      "fixed top-0 left-0 h-full w-64 bg-[#0d1117] text-white border-r border-gray-700 p-6 z-50",
      "transform transition-transform duration-300 ease-in-out",
      isOpen ? "translate-x-0" : "-translate-x-full",
      "md:translate-x-0 md:static md:block",
      "flex flex-col justify-between"
    )}
    >
      {/* Top section */}
      <div className="flex-1">
        {/* Tombol close untuk mobile */}
        <div className="flex justify-end mb-4 md:hidden">
          <button onClick={onClose} className="text-white text-xl">
            <FiX />
          </button>
        </div>

        <div className="flex flex-col items-center mb-8 group border-b border-gray-700 pb-4">

          {/* Nama dan Role */}
          <h1 className="mt-12 text-lg font-bold tracking-wide group-hover:text-blue-400 transition flex items-center gap-1">
            Ady Candra
            <span className="bg-blue-500 text-white text-[10px] px-0.5 py-0.5 rounded-full flex items-center gap-0.5">
              <BsCheck2 className="text-xs" />
            </span>
          </h1>
          <p className="text-sm text-gray-400 mb-1">Human Resources</p>

          {/* Badge kecil */}
          <div className="relative w-full overflow-hidden mt-2">
          <div className="flex gap-4 animate-scroll whitespace-nowrap w-max">
            {[...tags, ...tags].map((tag, i) => (
              <span
                key={i}
                className="bg-blue-900/80 text-white text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Employment Status */}
          <div className="mt-6 px-4 py-3 bg-gray-800 rounded-lg shadow text-sm leading-tight">
            <ul className="space-y-1">
              <li className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span className="text-xs text-gray-200">Full-time</span>
                </span>
                <span className="text-xs italic text-gray-400">Not available</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-xs text-gray-200">Freelance</span>
                </span>
                <span className="text-xs text-green-400">Available</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-xs text-gray-200">Partnership</span>
                </span>
                <span className="text-xs text-green-400">Available</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-1.5 rounded-md text-xs font-medium transition"
            >
              Let’s Collaborate
            </a>

          </div>



        </div>
        
        </div>
        <nav className="flex flex-col gap-2 mt-4">
          {[
            { href: "/", label: "Home", icon: <FiHome /> },
            { href: "#about", label: "About", icon: <FiUser /> },
            { href: "#achievement", label: "Achievement", icon: <FiAward /> },
            { href: "#projects", label: "Projects", icon: <FiPackage /> },
            { href: "#learning", label: "Learning", icon: <FiBookmark  /> },
            { href: "#contact", label: "Contact", icon: <FiMail /> },
          ].map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-transform duration-200"
            >
              <span className="text-base">{icon}</span>
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="h-110 content-end items-center">
        <Footer />
      </div>

    </aside>
  );
}
