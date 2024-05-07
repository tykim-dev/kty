import Image from 'next/image'
import maingBgTitle from '/public/images/main_bg_title.png'
 
export default function MainBackgroundTitle() {
  return (
    <Image
      src={maingBgTitle}
      width={500}
      height={200}
      alt="JLPT CODE"
    />
  )
}