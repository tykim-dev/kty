import React, {memo} from "react";

type JlptContentProps = {
  question: any,
}

const CardJlptContent = (props:JlptContentProps) => {
  const {question} = props;
  const {content} = question;

  const parseHtml = (html: string) => {
    return <div dangerouslySetInnerHTML={{ __html: html.replaceAll('\\r\\n', '<br>') }} />;
  };

  return (
    <>
      <div className="flex flex-col min-w-0 break-words rounded mb-1">
        <div className="flex-auto px-4 py-2">
          <div className="flex flex-wrap">
            <div className="bg-blueGray-200 rounded-lg p-4">{parseHtml(content || '')}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(CardJlptContent);
