import { useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaPlay, FaPause } from "react-icons/fa";

const Play = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <div className="play bg-one w-[100%] fixed left-0 ring-0 bottom-0 flex justify-between items-center p-3">
        <div className="play-one text-two flex items-center gap-2 p-2">
          <div className="play-p">
            <p>Play It Safe</p>
            <p>Julia Wolf</p>
          </div>
          <div className="play-btn">
            <button>
              <CiHeart className="text-2xl" />
            </button>
          </div>
        </div>
        <div className="play-two flex flex-col items-center">
          <button
            className="border bg-two text-one rounded-[50%] w-[40px] h-[40px] flex justify-center items-center "
            onClick={togglePlayPause}
          >
            {isPlaying ? (
              <FaPause className="text-2xl" />
            ) : (
              <FaPlay className="text-2xl" />
            )}
          </button>
        </div>
        <div className="play-three"></div>
      </div>
      <audio ref={audioRef} src="/path/to/your/music/file.mp3" />
    </div>
  );
};

export default Play;
