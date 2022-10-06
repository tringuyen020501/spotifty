import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";

export default function Playing() {
   const { song, handelSetSong } = useContext(Songs);
   const handelNexSong = () => {
      handelSetSong(song.id + 1);
   };
   const handelReturnSong = () => {
      handelSetSong(song.id - 1);
   };
   return (
      <div>
         <AudioPlayer
            className="player-music"
            src={song.url}
            layout="stacked-reverse"
            showSkipControls={true}
            showJumpControls={false}
            onClickNext={handelNexSong}
            onClickReturn={handelReturnSong}
         />
      </div>
   );
}
