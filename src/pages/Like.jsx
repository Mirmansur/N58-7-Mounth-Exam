import { FaPause, FaPlay } from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { FcDislike, FcLike } from "react-icons/fc";
import { useRef, useState } from "react";
import { addToLiked } from "../redux/slice/likeSlice";

const Like = () => {
  const { likedProducts } = useSelector((state) => state.likeReducer);
  const audioRef = useRef(null);
  const dispatch = useDispatch();
  const [playingTrackId, setPlayingTrackId] = useState(null);

  const handleImageClick = (trackId, previewUrl) => {
    if (playingTrackId === trackId) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    } else {
      handlePlayPause(trackId, previewUrl);
    }
  };

  const handlePlayPause = (trackId, previewUrl) => {
    if (playingTrackId === trackId) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      if (audioRef.current && previewUrl) {
        audioRef.current.src = previewUrl;
        audioRef.current.play();
        setPlayingTrackId(trackId);
      }
    }
  };

  const handleToggleLike = (track) => {
    dispatch(addToLiked(track));
  };

  const isProductLiked = (productId) => {
    return likedProducts.some((item) => item.id === productId);
  };

  return (
    <div>
      <div className="Like">
        <Header />
        <div className="container">
          {likedProducts.length !== 0 ? (
            <table className="min-w-full">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Track</th>
                  <th>Artist</th>
                  <th>Play/Pause</th>
                  <th>Like/Dislike</th>
                </tr>
              </thead>
              <tbody>
                {likedProducts.map((track) => (
                  <tr key={track.id} className="border-b">
                    <td className="flex items-center">
                      <div className="relative">
                        {track.album.images &&
                          track.album.images.length > 0 && (
                            <img
                              src={track.album.images[0].url}
                              alt={track.name} // Improved alt text
                              className="w-12 h-12 object-cover mr-4 cursor-pointer"
                              onClick={() =>
                                handleImageClick(track.id, track.preview_url)
                              }
                            />
                          )}

                        {playingTrackId === track.id && (
                          <div className="absolute inset-0 flex items-center justify-center right-3">
                            {audioRef.current && audioRef.current.paused ? (
                              <FaPlay className="text-eleven text-2xl" />
                            ) : (
                              <FaPause className="text-eleven text-2xl" />
                            )}
                          </div>
                        )}
                      </div>
                      {track.name}
                    </td>
                    <td className="p-4">{track.album.name}</td>
                    <td className="p-4 flex items-center space-x-2">
                      <button
                        onClick={() =>
                          handlePlayPause(track.id, track.preview_url)
                        }
                        className="p-2 border-none bg-transparent"
                      >
                        {playingTrackId === track.id &&
                        !audioRef.current?.paused ? (
                          <FaPause className="text-xl text-eleven" />
                        ) : (
                          <FaPlay className="text-xl text-eleven" />
                        )}
                      </button>
                      <button
                        onClick={() => handleToggleLike(track)}
                        className="rounded bg-indigo-100 p-2 text-slate-950 transition duration-300 active:scale-75"
                      >
                        {isProductLiked(track.id) ? (
                          <FcDislike size={24} />
                        ) : (
                          <FcLike size={24} />
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <span className="flex w-full items-center justify-center">
              No Products in Favorites
            </span>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Like;
