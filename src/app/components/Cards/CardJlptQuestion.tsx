import { isEmpty } from "lodash";
import React, {memo} from "react";
import CardAudio from "./CardAudio";
import CardImage from "./CardImage";

type JlptQuestionProps = {
  questionType?: string,
  question: any,
  id?: string
}

const CardJlptQuestion = (props:JlptQuestionProps) => {
  const {questionType, question, id = ''} = props;
  const {content = '', audio = {}, image = {}} = question;

  const parseHtml = (html: string) => {
    return <div dangerouslySetInnerHTML={{ __html: html.replaceAll('\\r\\n', '<br>').replaceAll('\\n', '<br>').replaceAll(/\s/g, "&nbsp;") }} />;
  };

  return (
    <>
      <div className="flex flex-col min-w-0 break-words rounded mb-1">
        {!isEmpty(content) && (<div className={`flex-auto px-4 py-2 rounded-lg ${questionType === 'group' ? 'bg-green-400' : 'bg-green-100'}`}>
          <div className="flex flex-wrap" id={id}>
            {parseHtml(content || '')}
          </div>
        </div>
        )}
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

export default memo(CardJlptQuestion);
