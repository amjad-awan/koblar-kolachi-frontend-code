import React from 'react'
import video from "../../assets/video/08_webm.webm"
const Video = () => {
  return (
    <div className='aspect-auto w-[100%] container mx-auto my-[100px] rounded-md overflow-hidden'>
        <video src={video} className='h-[100%] w-[100%] object-cover'  autoPlay muted loop></video>
    </div>
  )
}


export default React.memo(Video);
