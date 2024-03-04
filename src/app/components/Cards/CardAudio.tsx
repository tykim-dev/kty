import React, {memo} from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

type AudioProps = {
  audio: any,
}

const CardAudio = (props:AudioProps) => {
  const {audio} = props;
  const {name, link} = audio;

  return (
    <>
      <div className="">
        {link && <AudioPlayer
          src={`${link}`}
        />}
      </div>
    </>
  );
}

export default memo(CardAudio);
