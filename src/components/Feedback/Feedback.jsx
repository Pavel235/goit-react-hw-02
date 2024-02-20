import styles from "./Feedback.module.css";

export default function Feedback({
  goodValue,
  neutralValue,
  badValue,
  totalValue,
  positiveFeedbacks,
}) {
  return (
    <div className={styles.feedbackList}>
      <p className={styles.feedbackText}>Good: {goodValue}</p>
      <p className={styles.feedbackText}>Neutral: {neutralValue}</p>
      <p className={styles.feedbackText}>Bad: {badValue}</p>
      <p className={styles.feedbackText}>Total: {totalValue}</p>
      <p className={styles.feedbackText}>Positive: {positiveFeedbacks}</p>
    </div>
  );
}
