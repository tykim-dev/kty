import { sortBy } from "lodash";
import React, {memo} from "react";

type JlptAnswerProps = {
  questionNo: number,
  choices: Array<any>,
  answer: number,
}

const CardJlptAnswer = (props:JlptAnswerProps) => {
  const {questionNo, choices, answer} = props;

  const parseHtml = (html: string) => {
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <>
      <div className="flex-auto px-4 py-2">
        {choices && sortBy(choices, 'no').map((item, idx) => {
          return (
            <div key={`question-answer-${questionNo}-${item?.no}`} className="flex items-center mb-4">
              <input id={`default-radio-${questionNo}-${item?.no}`} type="radio" value={`${item?.no}`} name={`${questionNo}`} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor={`default-radio-${questionNo}-${item?.no}`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{parseHtml(`${item?.content}`)}</label>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default memo(CardJlptAnswer);
