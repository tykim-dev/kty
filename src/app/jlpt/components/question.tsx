import CardJlptAnswer from "@/app/components/Cards/CardJlptAnswer";
import CardJlptQuestion from "@/app/components/Cards/CardJlptQuestion";
import React, {memo} from "react";

type QuestionProps = {
  questionInfo: any
}

const Question = (props:QuestionProps) => {
  const {questionInfo} = props;
  const {year, month, level, classification, question, questionType, choices, answer} = questionInfo;

  return (
    <>
      {questionType === 'group' && <CardJlptQuestion question={question} />}
      {questionType === 'normal' && (
        <>
          <CardJlptQuestion question={question} />
          {choices && <CardJlptAnswer choices={choices} answer={answer} />}
        </>
      )}
    </>
  );
}

export default memo(Question);
