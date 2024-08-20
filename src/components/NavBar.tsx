import React from "react";
import { NavLink } from "react-router-dom";

type NavLinkItem = {
  name: string;
  path: string;
};

const NavBar: React.FC = () => {
  const navLinks: NavLinkItem[] = [
    { name: "SignIn", path: "/signin" },
    { name: "Register", path: "/register" },
  ];

  return (
    <nav className="text-white py-10 flex justify-between">
      <NavLink to="/home" className="text-white font-bold text-lg ">
        Logo
      </NavLink>
      <ul className="flex gap-10 text-lg">
        {navLinks.map((link, i) => (
          <li key={i}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-black"
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
