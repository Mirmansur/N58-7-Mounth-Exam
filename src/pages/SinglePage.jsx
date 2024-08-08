import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SinglePage = () => {
  const { id } = useParams();
  const [data] = useFetch(`/playlists/${id}`);
  const tracksList = data.tracks?.items;

  // State to keep track of the currently playing audio
  const [playingTrackId, setPlayingTrackId] = useState(null);
  const audioRef = useRef(null);

  // Function to handle playing a new track
  const handlePlay = (trackId, previewUrl) => {
    // Pause previously playing audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Set the new track and play it
    setPlayingTrackId(trackId);
    if (audioRef.current && previewUrl) {
      audioRef.current.src = previewUrl;
      audioRef.current.play();
    }
  };

  return (
    <div className="music flex items-center justify-center">
      <Header />
      <div className="container">
        <div className="flex flex-col ">
          {tracksList?.map((track) => (
            <span className="flex flex-col mb-4" key={track.track.id}>
              <div className="flex items-center">
                <img
                  src={track.track.album.images[0].url}
                  alt={track.track.album.name}
                  className="w-[52px] h-[52px] object-cover mr-4"
                />
                <div>
                  <p className="font-semibold">{track.track.name}</p>
                  <p className="text-gray-600">{track.track.album.name}</p>
                  {track.track.preview_url && (
                    <>
                      <button
                        onClick={() =>
                          handlePlay(track.track.id, track.track.preview_url)
                        }
                        className="mt-2 p-1 bg-blue-500 text-white rounded"
                      >
                        {playingTrackId === track.track.id ? "Pause" : "Play"}
                      </button>
                      <audio ref={audioRef} />
                    </>
                  )}
                </div>
              </div>
            </span>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SinglePage;
