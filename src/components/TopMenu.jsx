"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const menuItems = [
  {
    title: "Inicio",
    path: "/home",
  },
  {
    title: "Todas las recetas",
    path: "/recipes",
  },
  {
    title: "Agregar receta",
    path: "/add-recipe",
  },
  {
    title: "Receta aleatoria",
    path: "/random",
  },
];

export const TopMenu = () => {
  const [openMenu, setOpenMenu] = useState(true);

  
  

  return (
    <nav className="border-gray-200 bg-orange">
      <div id="container" className="max-md:flex-col-reverse max-md:justify-end w-full mx-auto p-5 flex justify-end shadow-2xl">
        <div
          className={`"px-2 ${!openMenu ? 'flex flex-col gap-3' : 'hidden'} md:flex justify-between items-center w-full md:w-auto md:order-1 text-white"`}
          id="menu-list"
        >
          <ul className="flex-col text-center md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            {menuItems.map(({ title, path }) => (
              <li key={title}>
                <Link
                  href={path}
                  className="md:bg-transparent text-white block text-lg pl-3 pr-4 py-2 hover:text-darkOrange md:p-0 rounded"
                  aria-current="page"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <div
            id="search-bar"
            className="flex items-center max-w-md mx-8 bg-white rounded-lg"
          >
            <div className="w-full">
              <input
                type="search"
                className="w-full px-4 text-darkOrange rounded-full focus:outline-none appearance-none"
                placeholder="buscar receta"
                x-model="search"
              />
            </div>
            <div>
              <button
                type="submit"
                className="flex items-center bg-darkOrange justify-center w-12 h-8 text-white rounded-r-lg"
              >
                <IoIosSearch size={20} />
              </button>
            </div>
          </div>
        </div>
        <div id="hamburger" className="flex items-start md:hidden md:order-2">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            type="button"
            className="md:hidden text-white active:text-darkOrange focus:outline-none rounded-lg inline-flex items-center justify-center"
          >
            <GiHamburgerMenu size={30} />
          </button>
        </div>
      </div>
    </nav>
  );
};
