import React, {memo} from "react";

type JlptQuestionProps = {
  question: any,
  id?: string
  questionNo?: number,
}

const CardJlptQuestion = (props:JlptQuestionProps) => {
  const {question, id = '', questionNo} = props;
  const {content} = question;

  const parseHtml = (html: string) => {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <>
      <div className="flex flex-col min-w-0 break-words rounded mb-1">
        <div className="flex-auto px-4 py-2">
          <div className="flex flex-wrap" id={id}>
            <span className="mr-1">{`${questionNo ? questionNo + '.' : ''}`}</span><span>{parseHtml(question?.content)}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(CardJlptQuestion);
