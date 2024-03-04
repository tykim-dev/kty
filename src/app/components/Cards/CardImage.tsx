'use client'
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
        <Image src={link} alt={name} width={400} height={400} />
      </div>
    </>
  );
}

export default memo(CardImage);
