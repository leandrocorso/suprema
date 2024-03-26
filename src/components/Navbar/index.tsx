"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { StyledNavbar } from "./style";
import { nanoid } from "nanoid";
import classNames from "classnames";

export const Navbar = () => {
  const pathname = usePathname();

  const routes = {
    "/": "Pokémons",
    "/contact": "Contato",
  };

  return (
    <StyledNavbar>
      <ul>
        {Object.keys(routes).map((route: string) => {
          const current = route === pathname;
          return (
            <li key={nanoid()} className={classNames({ "is-active": current })}>
              <Link href={route}>{routes[route as keyof typeof routes]}</Link>
            </li>
          );
        })}
      </ul>
    </StyledNavbar>
  );
};
