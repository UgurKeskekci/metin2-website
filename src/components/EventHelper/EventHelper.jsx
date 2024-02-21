import React from "react";
import styles from "./EventHelper.module.css";
import { getImageUrl } from "../../utils";
import { useState } from "react";
import OkeyEventTable from "./EventPlaygrounds/OkeyEventTable/OkeyEventTable";

export const EventHelper = () => {
const [contentVisible, setContentVisible] = useState();
const handleItemClick = () => {
  setContentVisible(!contentVisible);
};

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Etkinlik Defteri</h2>
      <div className={styles.content}>
        <ul className={styles.eventItems}>
          <li className={styles.eventItem}>
            <div onClick={handleItemClick} >
              <h3>Okey Etkinliği</h3>
              <img
                src={getImageUrl("eventImages/kraliyakalaimg.png")}
                alt="Cursor icon"
                className={styles.eventImage}
              />
            </div>
          </li>
          <li className={styles.eventItem}>
            <div >
              <h3>Kralı Yakala</h3>
              <img
                src={getImageUrl("eventImages/okeyimg.png")}
                alt="Server icon"
                className={styles.eventImage}
              />
            </div>
          </li>
          <li className={styles.eventItem}>
            <div >
              <h3>Kahin Etkinliği</h3>
              <img
                src={getImageUrl("eventImages/kahinimg.png")}
                alt="UI icon"
                className={styles.eventImage}
              />
            </div>
          </li>
        </ul>
        <div className={styles.eventPlayground}>Etkinlik ekrani  {contentVisible && <OkeyEventTable />}</div>
      </div>
    </section>
  );
};
