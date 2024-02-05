import React, {memo} from "react";

type JlptQuestionProps = {
  questionInfo: any
}

const CardJlptQuestion = (props:JlptQuestionProps) => {
  const {questionInfo} = props;
  const {question, questionType} = questionInfo;

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words rounded mb-1">
        <div className="flex-auto px-4 py-2">
          <div className="flex flex-wrap">
            {questionType === 'group' && <p>{question?.content}</p>}
            {questionType === 'normal' && <p>{question?.content}</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(CardJlptQuestion);
