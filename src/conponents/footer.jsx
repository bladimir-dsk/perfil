import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { NavLink } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { HeartIcon } from '../conponents/HeartIcon.jsx';
import NavBar from "./navbar.jsx";

const Footer = () => {
  const btnLink = 'block inline-block py-1 text-blue-300 hover:text-blue-400 cursor-pointer mr-3 font-bold text-inherit';
  const activeLink = 'block inline-block py-1 text-red-400 mr-3 font-bold text-inherit';

  return (

    <footer className="fixed bottom-0 left-0 w-full z-50 shadow-lg">
      <Navbar isBordered >

        <NavbarContent className="sm:flex gap-4 container mx-auto flex flex-wrap flex-col md:flex-row items-center" justify="center">
          <NavbarItem>
            <NavLink to="/" className={({ isActive }) => isActive ? activeLink : btnLink}>
            <a className={({ isActive }) => isActive ? activeLink : btnLink}>
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="/cursos" className={({ isActive }) => isActive ? activeLink : btnLink}>
            <a className={({ isActive }) => isActive ? activeLink : btnLink}>
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="/imagenes" className={({ isActive }) => isActive ? activeLink : btnLink}>
            <a className={({ isActive }) => isActive ? activeLink : btnLink}>
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="/imagenes" className={({ isActive }) => isActive ? activeLink : btnLink}>
              
            <a className={({ isActive }) => isActive ? activeLink : btnLink}>
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>

            </NavLink>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
  
    </footer>
  );
};

export default Footer;
