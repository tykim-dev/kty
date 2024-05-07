import Image from 'next/image'
import maingBg from '/public/images/main_bg.png'
 
export default function MainBackground() {
  return (
    <Image
      alt="동경"
      src={maingBg}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
  )
}