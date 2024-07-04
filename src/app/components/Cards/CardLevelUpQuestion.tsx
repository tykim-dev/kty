import React, {memo} from "react";
import CardAudio from "./CardAudio";
import CardImage from "./CardImage";
import { isEmpty } from "lodash";

type LevelUpQuestionProps = {
  questionType?: string,
  question: any,
  id?: string
  questionNo?: number,
}

const CardLevelUpQuestion = (props:LevelUpQuestionProps) => {
  const {questionType, question, id = '', questionNo} = props;
  const {content = '', audio = {}, image = {}} = question;
  
  const parseHtml = (html: string) => {
    return <div dangerouslySetInnerHTML={{ __html: html.replaceAll('\\r\\n', '<br>').replaceAll('\\n', '<br>').replaceAll(/\s/g, "&nbsp;") }} />;
  };

  return (
    <>
      <div className="flex flex-col min-w-0 break-words rounded mb-1">
        <div className={`flex-auto px-4 py-2 rounded-lg ${questionType === 'group' ? 'bg-green-400' : 'bg-green-100'}`}>
          <div className="flex flex-wrap" id={id}>
            <div className="mr-1">{`${questionNo ? questionNo + '.' : ''}`}</div><div>{parseHtml(content || '')}</div>
          </div>
        </div>
        {!isEmpty(audio) && (
          <div className="flex-auto p-2">
            <CardAudio audio={audio} />
          </div>
        )}
        {!isEmpty(image) && (
          <div className="flex-auto p-2">
            <CardImage image={image} />
          </div>
        )}
      </div>
    </>
  );
}

export default memo(CardLevelUpQuestion);
