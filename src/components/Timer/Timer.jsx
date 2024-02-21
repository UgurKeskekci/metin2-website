// Timer.js
import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import alarmSound from '../../../assets/sounds/alarm.mp3'; 
import styles from "./Timer.module.css";

const Timer = ({ timerDuration }) => {
  const [seconds, setSeconds] = useState(timerDuration);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;

    if (isRunning) {
      timerId = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            // Timer reached zero, play the alarm sound
            const sound = new Howl({ src: [alarmSound] });
            sound.play();
            clearInterval(timerId);
            setIsRunning(false);
            return timerDuration; // Reset the timer to the initial duration
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timerId); // Cleanup on component unmount
  }, [isRunning, timerDuration]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours > 0 ? hours.toString().padStart(2, '0') + 's ' : ''}${minutes.toString().padStart(2, '0')}dk ${seconds.toString().padStart(2, '0')}s`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setSeconds(timerDuration);
    setIsRunning(false);
  };

  return (
    <div className={styles.container}>
      <p className={styles.text}>{formatTime(seconds)} kaldı</p>
      <div className={styles.playBtnContainer}>
        <button onClick={handleStart} className={styles.playBtn}>
          Başlat
        </button>
        <button onClick={handleReset} className={styles.playBtn}>
          Sıfırla
        </button>
      </div>
    </div>
  );
};

export default Timer;
