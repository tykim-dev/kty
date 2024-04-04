import { sortBy } from "lodash";
import React, {memo} from "react";

type JlptAnswerProps = {
  questionNo: number,
  choices: Array<any>,
  answer: number,
  onClick?: (data: any) => any,
}

const CardJlptAnswer = (props:JlptAnswerProps) => {
  const {questionNo, choices, answer, onClick} = props;

  const handleClick = (selectedAnswer: number) => {
    onClick && onClick({questionNo, selectedAnswer});
  }

  const parseHtml = (html: string) => {
    return <span dangerouslySetInnerHTML={{ __html: html.replaceAll('\\r\\n', '<br>').replaceAll('\\n', '<br>').replaceAll(/\s/g, "&nbsp;") }} />;
  };

  return (
    <>
      <div className="flex-auto px-4 py-2">
        {choices && sortBy(choices, 'no').map((item, idx) => {
          return item.content ? (
            <div key={`question-answer-${questionNo}-${item?.no || idx + 1}`} className="flex items-center mb-4">
              <input onClick={(e) => handleClick(item?.no || idx + 1)} id={`default-radio-${questionNo}-${item?.no || idx + 1}`} type="radio" value={`${item?.no || idx + 1}`} name={`${questionNo}`} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor={`default-radio-${questionNo}-${item?.no || idx + 1}`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{parseHtml(`${item?.content}`)}</label>
            </div>
          ) : null;
        })}
      </div>
    </>
  );
}

export default memo(CardJlptAnswer);
