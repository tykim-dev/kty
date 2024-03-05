import React, {memo, useEffect, useRef} from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

type AudioProps = {
  audio: any,
}

const CardAudio = (props:AudioProps) => {

  const {audio} = props;
  const {name, link} = audio;

  const player = useRef<any>();
  
  useEffect(() => {
    player.current.audio.current.pause();
  }, [link]);

  return (
    <>
      <div className="">
        <AudioPlayer
          ref={player}
          autoPlay={false}
          src={`${link}?alt=media&key=AIzaSyBuE_vnpnm-jDx-V0yk4-4IpkH4boUnCUU`}
          onPlay={e => console.log("onPlay")}
        />
        {/* <audio controls preload="none" autoPlay={false}>
          <source src={`${link}?alt=media&key=AIzaSyBuE_vnpnm-jDx-V0yk4-4IpkH4boUnCUU`} type="audio/mp3" />
        </audio> */}
      </div>
    </>
  );
}

export default memo(CardAudio);
