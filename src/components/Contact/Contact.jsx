import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>İletişim</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:ugur.keskekci@hotmail.com">ugur.keskekci@hotmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/u%C4%9Fur-ke%C5%9Fkekci-3518001a2/">linkedin.com/uğur-keşkekci-3518001a2/</a>
        </li>
       
      </ul>
    </footer>
  );
};
