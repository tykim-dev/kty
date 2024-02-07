import React, {memo} from "react";

type JlptQuestionProps = {
  question: any
}

const CardJlptQuestion = (props:JlptQuestionProps) => {
  const {question} = props;
  const {content} = question;

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words rounded mb-1">
        <div className="flex-auto px-4 py-2">
          <div className="flex flex-wrap">
            <p>{question?.content}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(CardJlptQuestion);
