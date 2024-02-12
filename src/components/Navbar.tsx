"use client";
import React, { useEffect, useState } from "react";
import { SocialLinks, SideBar, NavLinks } from ".";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "@/styles/Navbar.module.scss";
import icon from "@/assets/favicon-2.png";

const links = {
  Home: "/",
  Projects: "/projects",
  Skills: "/skills",
  Experiences: "/experiences",
};

const Navbar = () => {
  const linksArr: [string, string][] = Object.entries(links);
  const [currentLink, setCurrentLink] = useState<string>("");
  const pathname: string = usePathname();

  useEffect(() => {
    setCurrentLink(pathname);
  }, []);

  return (
    <nav className={styles.app__navbar}>
      <div className={styles.app__icon_div} aria-hidden="true">
        <Image src={icon} alt="icon" width={32} height={32} priority />
        <h3>portfolio</h3>
      </div>
      <div>
        <NavLinks
          links={linksArr}
          currentLink={currentLink}
          setCurrentLink={setCurrentLink}
        />
      </div>

      <div className={styles.app__navbar_social_media}>
        <SocialLinks />
      </div>

      <div className={styles.app__navbar_menu}>
        <SideBar
          links={linksArr}
          currentLink={currentLink}
          setCurrentLink={setCurrentLink}
        />
      </div>
    </nav>
  );
};

export default Navbar;
