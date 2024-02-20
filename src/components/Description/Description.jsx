import styles from "./Description.module.css";

export default function Description() {
  return (
    <div className={styles.mainContent}>
      <h1 className={styles.mainTitle}>Sip Happens Café</h1>
      <p className={styles.mainText}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
