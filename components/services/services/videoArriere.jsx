"use client"

import { useState } from "react";
import ModalVideo from "react-modal-video";
export default function VideoArrier(){

    const [isOpen, setOpen] = useState(false);
    return (
      <>
       <div
  className="video-box-area absolute bottom-0 w-full fix wow fadeInUp "
  data-wow-delay="1s"
>
  <div className="video-wrap style1">
    <div className="container p-4">
      <div
        className="video-box"
        style={{
          backgroundImage: "url(/assets/img/bg/videoBoxBg1_1.png)",
        }}
      >
        <a onClick={() => setOpen(true)} className="play-btn popup-video">
          <i className="fa-sharp fa-solid fa-play"></i>
        </a>
      </div>
    </div>
  </div>
</div>

<ModalVideo
  channel="youtube"
  youtube={{ mute: 0, autoplay: 0 }}
  isOpen={isOpen}
  videoId="f2Gzr8sAGB8"
  onClose={() => setOpen(false)}
/>

      </>
    );
}