import React from "react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.scss";

import type { NavLinksProps } from "@/types/objects";

const NavLinks = ({ links, currentLink, setCurrentLink }: NavLinksProps) => {
  return (
    <ul className={styles.app__navbar_links}>
      {links.map(([name, path]) => {
        return (
          <li key={`link-${name}`}>
            <Link
              prefetch={false}
              href={path}
              onClick={() => setCurrentLink(path)}
              className={`${styles.app__navbar_link}
                 ${currentLink === path ? styles.app__navbar_link_color : ""}`}
            >
              {name}
              <div
                className={
                  currentLink === path
                    ? `${styles.app__navbar_link_underline}`
                    : ""
                }
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
