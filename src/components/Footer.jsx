"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/Footer.module.scss";
import { SocialLinks } from "./";

const Footer = () => {
  const [year, setYear] = useState("");

  useEffect(() => {
    const currentYear = new Date().getFullYear().toString();
    setYear(currentYear);
  }, []);

  return (
    <div className={styles.app__footer}>
      <p>My socials:</p>
      <div>
        <SocialLinks />
      </div>
      <p>Gmail: tonigrbic.5@gmail.com</p>
      <p>{year} Created by Toni Grbić, all rights reserved</p>
    </div>
  );
};

export default Footer;
