"use client";
import React, { useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import useClickOutside from "@/hooks/custom/useClickOutside";
import styles from "@/styles/Navbar.module.scss";
import Link from "next/link";

import type { NavLinksProps } from "@/types/objects";

const SideBar = ({ links, currentLink, setCurrentLink }: NavLinksProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = () => {
    setToggle(false);
  };
  useClickOutside(wrapperRef, handleClickOutside);

  const handleMenuClick = (link: string) => {
    setCurrentLink(link);
    setToggle(false);
  };

  return (
    <>
      <HiMenu onClick={() => setToggle(true)} />
      {toggle && (
        <div>
          <div ref={wrapperRef}>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              <h3>portfolio</h3>
              {links.map(([name, path]) => {
                return (
                  <li key={name}>
                    <Link
                      href={path}
                      key={`link-${name}`}
                      onClick={() => handleMenuClick(path)}
                      className={
                        currentLink === path
                          ? styles.app__navbar_menulink_color
                          : ""
                      }
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
