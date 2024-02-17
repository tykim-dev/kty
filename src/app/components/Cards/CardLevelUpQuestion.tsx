import React, {memo} from "react";

type JlptQuestionProps = {
  question: any,
  id?: string
}

const CardJlptQuestion = (props:JlptQuestionProps) => {
  const {question, id = ''} = props;
  const {content} = question;

  const parseHtml = (html: string) => {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <>
      <div className="flex flex-col min-w-0 break-words rounded mb-1">
        <div className="flex-auto px-4 py-2">
          <div className="flex flex-wrap" id={id}>
            {parseHtml(question?.content)}
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(CardJlptQuestion);
