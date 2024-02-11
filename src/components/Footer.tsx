import React from "react";
import styles from "@/styles/Footer.module.scss";
import { CURRENT_YEAR } from "@/lib/constants";
import { SocialLinks } from ".";

const Footer = () => {
  return (
    <div className={styles.app__footer}>
      <div className={styles.app__footer_social}>
        <p>My socials:</p>
        <div className={styles.app__footer_icons}>
          <SocialLinks showIconText />
        </div>
      </div>
      <div className={styles.app__footer_text}>
        <p>Gmail: tonigrbic.5@gmail.com</p>
        <p>{CURRENT_YEAR} Created by Toni Grbić, all rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
