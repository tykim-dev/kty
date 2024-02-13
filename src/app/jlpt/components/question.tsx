import CardJlptAnswer from "@/app/components/Cards/CardJlptAnswer";
import CardJlptQuestion from "@/app/components/Cards/CardJlptQuestion";
import React, {memo} from "react";
import { useJlptStore } from '@/app/store/jlptStore';

type QuestionProps = {
  questionInfo: any
}

const Question = (props:QuestionProps) => {
  const {questionInfo} = props;
  const {year, month, level, classification, question, questionNo, questionType, choices, answer} = questionInfo;

  const jlptList = useJlptStore((state) => state.jlptList);
  const setJlptAnswer = useJlptStore((state) => state.setJlptAnswer);

  const handleClick = (selectedData: any) => {
    setJlptAnswer(selectedData);
  }

  return (
    <>
      {questionType === 'group' && <CardJlptQuestion question={question} />}
      {questionType === 'normal' && (
        <>
          <CardJlptQuestion question={question} />
          {choices && <CardJlptAnswer onClick={handleClick} questionNo={questionNo} choices={choices} answer={answer} />}
        </>
      )}
    </>
  );
}

export default memo(Question);
