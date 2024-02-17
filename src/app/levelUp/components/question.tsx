import React, {memo} from "react";
import { useLevelUpStore } from '@/app/store/levelUpStore';
import CardLevelUpQuestion from "@/app/components/Cards/CardLevelUpQuestion";
import CardLevelUpAnswer from "@/app/components/Cards/CardLevelUpAnswer";

type QuestionProps = {
  questionInfo: any
}

const Question = (props:QuestionProps) => {
  const {questionInfo} = props;
  const {year, month, level, classification, question, questionNo, questionType, choices, answer} = questionInfo;

  const levelUpList = useLevelUpStore((state) => state.levelUpList);
  const setLevelUpAnswer = useLevelUpStore((state) => state.setLevelUpAnswer);

  const handleClick = (selectedData: any) => {
    setLevelUpAnswer(selectedData);
  }

  return (
    <>
      {questionType === 'group' && <CardLevelUpQuestion question={question} />}
      {questionType === 'normal' && (
        <>
          <CardLevelUpQuestion question={question} id={`jlpt-question-${questionNo}`} />
          {choices && <CardLevelUpAnswer onClick={handleClick} questionNo={questionNo} choices={choices} answer={answer} />}
        </>
      )}
    </>
  );
}

export default memo(Question);
