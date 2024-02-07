import { sortBy } from "lodash";
import React, {memo} from "react";

type JlptAnswerProps = {
  choices: Array<any>,
  answer: number,
}

const CardJlptAnswer = (props:JlptAnswerProps) => {
  const {choices, answer} = props;

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words rounded mb-1">
        <div className="flex-auto px-4 py-2">
          <div className="flex flex-wrap">
            {choices && sortBy(choices, 'no').map((item, idx) => {
              return (
                <div key={`question-answer-${item?.no}`} className="flex items-center mb-4">
                  <input id={`default-radio-${item?.no}`} type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor={`default-radio-${item?.no}`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{`${item?.no} ${item?.content}`}</label>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(CardJlptAnswer);
