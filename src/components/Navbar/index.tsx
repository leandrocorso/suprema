"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { StyledNavbar } from "./style";
import { nanoid } from "nanoid";
import classNames from "classnames";

export const Navbar = () => {
  const pathname = usePathname();

  const routes = {
    "/": "Home",
    "/abilities": "Poderes",
    "/contact": "Contato",
  };

  return (
    <StyledNavbar>
      <ul>
        {Object.keys(routes).map((route: string) => {
          const stringpath = route.replace("/", "");
          let current = false;
          if (pathname) {
            const pathArray = pathname.split("/").filter((p) => p);
            current = pathname === route || pathArray.includes(stringpath);
          }

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
