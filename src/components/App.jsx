import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { NotificationMessage } from './NotificationMessage/NotificationMessage';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const options = ['good', 'bad', 'neutral']

  const handleFeedback = event => {
   
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      default:
        return;
    }
  };

  const totalFeedback = good + bad + neutral;
  const positivePercentage = Math.round((good * 100) / totalFeedback);

  return (
    <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={options}
          handleFeedback={handleFeedback}
        />
      </Section>
      {good === 0 && bad === 0 && neutral === 0 ? (
        <NotificationMessage message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </Section>
      )}
    </div>
  );
};

