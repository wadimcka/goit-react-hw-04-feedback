import React from 'react';
import { BtnWrap, FeedbackBtn } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const optionsArrey = Object.keys(options);
  return (
    <BtnWrap>
      {optionsArrey.map(option => (
        <FeedbackBtn
          key={option}
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeedbackBtn>
      ))}
    </BtnWrap>
  );
}
