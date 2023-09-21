"use client"
import React, {useRef, useState} from 'react'
import useClickOutside from '../hooks/custom/useClickOutside';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';
import styles from "../styles/Navbar.module.scss";

const SideBar = ({ links, setCurrentLink, currentLink}) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [toggle, setToggle] = useState<boolean>(false);
    useClickOutside(wrapperRef, setToggle, false);
    
    const handleMenuClick = (link: string) => {
       setCurrentLink(link);
       setToggle(false);
    };

    return (
     <> 
        <HiMenu onClick={() => setToggle(true)} />
        {toggle &&
        <div>
            <div ref={wrapperRef}>
                <HiX onClick={() => setToggle(false)} />
                <ul>
                    <h3>portfolio</h3>
                    {links.map((link) => {
                        return (
                        <li key={link}>
                            <Link
                              href={`/${link}`}
                              key={`link-${link}`}
                              onClick={() => handleMenuClick(link)}
                              className={
                                currentLink === link
                                    ? styles.app__navbar_menulink_color
                                    : ""
                                }
                            >
                                {link === "" ? "home" : link}
                            </Link>
                        </li>
                        );
                    })}
                </ul>
            </div>
        </div>
        }
     </>
    );
}

export default SideBar