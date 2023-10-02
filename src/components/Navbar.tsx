"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "../styles/Navbar.module.scss";
import { SocialLinks, SideBar } from ".";

const Navbar = () => {
  const links: string[] = ["", "projects", "skills", "experiences"];
  const [currentLink, setCurrentLink] = useState<string>("");
  const pathname: string = usePathname();

  useEffect(() => {
    const currentPage = pathname.slice(1);
    setCurrentLink(currentPage);
  }, []);

  return (
    <nav className={styles.app__navbar}>
      <div>
        <h3>portfolio</h3>
      </div>
      <div>
        <ul className={styles.app__navbar_links}>
          {links?.map((link) => {
            return (
              <li key={`link-${link}`}>
                <Link
                  href={`/${link}`}
                  onClick={() => setCurrentLink(link)}
                  className={`${styles.app__navbar_link}
                    ${currentLink === link 
                        ? styles.app__navbar_link_color : ""
                     }`}
                >
                  {link === "" ? "home" : link}
                  <div
                    className={
                      currentLink === link
                        ? `${styles.app__navbar_link_underline}` : ""
                    }
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.app__navbar_social_media}>
        <SocialLinks />
      </div>

      <div className={styles.app__navbar_menu}>
        <SideBar
          links={links}
          currentLink={currentLink}
          setCurrentLink={setCurrentLink}
        />
      </div>
    </nav>
  );
};

export default Navbar;
