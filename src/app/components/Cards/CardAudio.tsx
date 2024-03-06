import React, {memo} from "react";

type AudioProps = {
  audio: any,
}

const CardAudio = (props:AudioProps) => {

  const {audio} = props;
  const {name, link} = audio;

  return (
    <>
      <div className="">
        <iframe src={link} className="w-full" height="60"></iframe>
      </div>
    </>
  );
}

export default memo(CardAudio);
