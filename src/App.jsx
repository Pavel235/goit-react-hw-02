import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [values, setValues] = useState(() => {
    const savedFeedbacks = window.localStorage.getItem("saved-feedbacks");

    if (savedFeedbacks !== null) {
      return JSON.parse(savedFeedbacks);
    }

    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedbacks", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const resetValues = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  const goodReviews = Math.round(
    ((values.good + values.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        handleReset={resetValues}
        totalReviewes={totalFeedback}
        handleClick={updateFeedback}
      />
      <div style={{ display: totalFeedback > 0 ? "block" : "none" }}>
        <Feedback
          goodValue={values.good}
          neutralValue={values.neutral}
          badValue={values.bad}
          totalValue={totalFeedback}
          positiveFeedbacks={goodReviews}
        />
      </div>
      <div style={{ display: totalFeedback === 0 ? "block" : "none" }}>
        <Notification />
      </div>
    </>
  );
}

export default App;
