import React, {memo} from "react";
import Image from 'next/image'

type ImageProps = {
  image: any
}

const CardImage = (props:ImageProps) => {
  const {image} = props;
  const {name, link} = image;

  return (
    <>
      <div className="">
        <Image src={link} alt={name} width={0} height={0} style={{ width: '400px', height: 'auto' }} />
      </div>
    </>
  );
}

export default memo(CardImage);
