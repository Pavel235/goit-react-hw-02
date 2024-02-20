import styles from "./Options.module.css";

export default function Options({ handleClick, handleReset, totalReviewes }) {
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={styles.buttonElement}
        onClick={() => handleClick("good")}
        type="button"
      >
        Good
      </button>
      <button
        className={styles.buttonElement}
        onClick={() => handleClick("neutral")}
        type="button"
      >
        Neutral
      </button>
      <button
        className={styles.buttonElement}
        onClick={() => handleClick("bad")}
        type="button"
      >
        Bad
      </button>
      <button
        className={styles.buttonElement}
        onClick={handleReset}
        style={{ display: totalReviewes > 0 ? "block" : "none" }}
        type="button"
      >
        Reset
      </button>
    </div>
  );
}
