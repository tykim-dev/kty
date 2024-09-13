import { isEmpty } from "lodash";
import React, {memo} from "react";
import CardAudio from "./CardAudio";
import CardImage from "./CardImage";

type JlptContentProps = {
  questionType?: string,
  question: any,
}

const CardJlptContent = (props:JlptContentProps) => {
  const {questionType, question} = props;
  const {content = '', audio = {}, image = {}} = question;

  const parseHtml = (html: string) => {
    return <div dangerouslySetInnerHTML={{ __html: html.replaceAll('\\r\\n', '<br>').replaceAll('\\n', '<br>').replaceAll(/\s/g, "&nbsp;") }} />;
  };

  return (
    <>
      <div className="flex flex-col min-w-0 break-words rounded mb-1">
        {!isEmpty(content) && (<div className="flex-auto px-4 py-2">
          <div className="flex flex-wrap">
            <div className="bg-blueGray-200 rounded-lg p-4">
              {parseHtml(content || '')}
            </div>
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

export default memo(CardJlptContent);
