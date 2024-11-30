"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";

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
    title: "Agregar una receta",
    path: "/add-recipe",
  },
  {
    title: "Receta aleatoria",
    path: "/random",
  },
];

export const TopMenu = () => {
  const searchPath = useSearchParams().size || 0;
  const path = usePathname();
  useEffect(() => {
    if (!path.includes("search")) {
      setSearchStr("");
    }
  }, [searchPath, path]);

  const [closeMenu, setCloseMenu] = useState(true);
  const [searchStr, setSearchStr] = useState("");
  const router = useRouter();

  const onSubmitSearch = (e) => {
    e.preventDefault();
    router.push(`/recipes?search=${searchStr}`);
  };

  return (
    <div>
      {!closeMenu && (
        <div
          className="fade-in fixed top-10 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm md:hidden"
          onClick={() => setCloseMenu(!closeMenu)}
        ></div>
      )}
      <nav
        className={clsx(
          "fixed p-3 right-0 top-0 bg-orange z-10 transform transition duration-500 w-full md:static md:flex md:items-center md:justify-end md:py-7",
          { "-translate-y-[80%] md:translate-y-0": closeMenu }
        )}
      >
        <div
          className="px-2 flex flex-col md:flex-row justify-between items-center w-full md:w-auto md:order-1 text-white mb-5 md:mb-0"
          id="menu-list"
        >
          <ul className="flex-col text-center md:flex-row flex md:space-x-8 md:mt-0 md:text-sm md:font-medium">
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
          <form
            onSubmit={onSubmitSearch}
            id="search-bar"
            className="flex items-center max-w-md mx-8 bg-white rounded-lg"
          >
            <div className="w-full">
              <input
                onChange={(e) => {
                  setSearchStr(e.target.value);
                }}
                value={searchStr}
                type="search"
                className="w-full px-4 text-darkOrange rounded-full focus:outline-none appearance-none"
                placeholder="Buscar receta"
                x-model="search"
              />
            </div>
            <div>
              <button
                type="submit"
                className="flex items-center bg-darkOrange justify-center w-12 h-8 text-white rounded-r-lg active:bg-orange"
              >
                <IoIosSearch size={20} />
              </button>
            </div>
          </form>
        </div>
        <div id="hamburger" className="flex items-start md:hidden md:order-2">
          <button
            onClick={() => setCloseMenu(!closeMenu)}
            type="button"
            className="md:hidden text-white active:text-darkOrange hover:text-darkOrange focus:outline-none rounded-lg inline-flex items-center justify-center"
          >
            {!closeMenu ? <MdClose size={35} /> : <GiHamburgerMenu size={30} />}
          </button>
        </div>
      </nav>
    </div>
  );
};
