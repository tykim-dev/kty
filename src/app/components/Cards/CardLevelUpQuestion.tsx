import React, {memo} from "react";

type LevelUpQuestionProps = {
  question: any,
  id?: string
  questionNo?: number,
}

const CardLevelUpQuestion = (props:LevelUpQuestionProps) => {
  const {question, id = '', questionNo} = props;
  const {content} = question;

  const parseHtml = (html: string) => {
    return <div dangerouslySetInnerHTML={{ __html: html.replaceAll('\\r\\n', '<br>') }} />;
  };

  return (
    <>
      <div className="flex flex-col min-w-0 break-words rounded mb-1">
        <div className="flex-auto px-4 py-2">
          <div className="flex flex-wrap" id={id}>
            <div className="mr-1">{`${questionNo ? questionNo + '.' : ''}`}</div><div>{parseHtml(content || '')}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(CardLevelUpQuestion);
