import React, { useState } from "react";
import styles from "./OkeyEventTable.module.css";

function OkeyEventTable() {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardClick = (row, cardNumber) => {
 `   // Create a unique identifier for each card`
    const cardId = `${row}-${cardNumber}`;

    // Toggle the card selection
    setSelectedCards((prevSelectedCards) => {
      if (prevSelectedCards.includes(cardId)) {
        // Card is already selected, remove it
        return prevSelectedCards.filter((id) => id !== cardId);
      } else {
        // Card is not selected, add it
        return [...prevSelectedCards, cardId];
      }
    });
  };

  const handleResetClick = () => {
    // Reset all selected cards
    setSelectedCards([]);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Okey Etkinliği</h2>
      <div className={styles.eventTable}>
        <div className={`${styles.cardRows} ${styles.redCardRows}`}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((cardNumber) => (
            <div
              key={`red-${cardNumber}`}
              className={`${styles.card} ${
                selectedCards.includes(`red-${cardNumber}`)
                  ? styles.selected
                  : ""
              }`}
              onClick={() => handleCardClick("red", cardNumber)}
            >
              {cardNumber}
            </div>
          ))}
        </div>
        <div className={`${styles.cardRows} ${styles.yellowCardRows}`}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((cardNumber) => (
            <div
              key={`yellow-${cardNumber}`}
              className={`${styles.card} ${
                selectedCards.includes(`yellow-${cardNumber}`)
                  ? styles.selected
                  : ""
              }`}
              onClick={() => handleCardClick("yellow", cardNumber)}
            >
              {cardNumber}
            </div>
          ))}
        </div>
        <div className={`${styles.cardRows} ${styles.blueCardRows}`}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((cardNumber) => (
            <div
              key={`blue-${cardNumber}`}
              className={`${styles.card} ${
                selectedCards.includes(`blue-${cardNumber}`)
                  ? styles.selected
                  : ""
              }`}
              onClick={() => handleCardClick("blue", cardNumber)}
            >
              {cardNumber}
            </div>
          ))}
        </div>
      </div>
      <button className={styles.resetButton} onClick={handleResetClick}>
        Reset
      </button>
    </section>
  );
}

export default OkeyEventTable;
