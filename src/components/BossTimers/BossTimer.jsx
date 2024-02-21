import React from "react";

import styles from "./BossTimer.module.css";
import { getImageUrl } from "../../utils";
import Timer from "../Timer/Timer";
import { useState } from "react";

export const BossTimer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.dungeonCard}>
          <p>Jotun</p>
          <img
            src={getImageUrl("bossImg300px/jotun.png")}
            alt="jotun"
            className={styles.bossImg}
          />

          <div className={styles.timer}>
          <Timer timerDuration={7200} />
          </div>
        </div>
        <div className={styles.dungeonCard}>
          <p>Razadör</p>
          <img
            src={getImageUrl("bossImg300px/razo.png")}
            alt="razodor"
            className={styles.bossImg}
          />

          <div className={styles.timer}>
          <Timer timerDuration={1800} />
          </div>
        </div>
        <div className={styles.dungeonCard}>
          <p>Nemere</p>
          <img
            src={getImageUrl("bossImg300px/nemere.png")}
            alt="nemere"
            className={styles.bossImg}
          />

          <div className={styles.timer}>
          <Timer timerDuration={14400} />
          </div>
        </div>
        <div className={styles.dungeonCard}>
          <p>Meley</p>
          <img
            src={getImageUrl("bossImg300px/meley.png")}
            alt="meley"
            className={styles.meleyImg}
          />

          <div className={styles.timer}>
          <Timer timerDuration={10800} />
          </div>
        </div>
        <div className={styles.dungeonCard}>
          <p>Hidra</p>
          <img
            src={getImageUrl("bossImg300px/hidra.png")}
            alt="hidra"
            className={styles.bossImg}
          />

          <div className={styles.timer}>
          <Timer timerDuration={1200} />
          </div>
        </div>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
