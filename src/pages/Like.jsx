import { FaPause, FaPlay } from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { FcDislike, FcLike } from "react-icons/fc";
import { useRef, useState } from "react";
import { addToLiked } from "../redux/slice/likeSlice";
import { CiHeart } from "react-icons/ci";

const Like = () => {
  const { likedProducts } = useSelector((state) => state.likeReducer);
  const audioRef = useRef(new Audio()); // Initialize audio element
  const dispatch = useDispatch();
  const [playingTrackId, setPlayingTrackId] = useState(null);

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

      if (previewUrl) {
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
    <div className="Like bg-black w-[800px]">
      <Header />
      <div className="container bg-one h-[2000px]">
        <div className="likes bg-purple p-4 flex  items-center gap-5">
          <div className="likes-one  shadow-black border-none  w-[297px] bg-red h-[297px] flex  items-center justify-center rounded-xl">
            <CiHeart className="text-[200px] text-white" />
          </div>
          <div className="likes-two">
            <p className="font-sans  font-medium text-lg w-[84px] text-two  ">
              PUBLIC PLAYLIST
            </p>
            <h1 className="font-sans  font-black text-[62px] text-two">
              Liked Songs
            </h1>
          </div>
        </div>
        {likedProducts.length !== 0 ? (
          <table className="table-auto text-white w-full">
            <tbody>
              {likedProducts.map((track) => (
                <tr key={track.id} className="border-b text-white">
                  <td className="flex items-center">
                    <div className="relative">
                      {track.album.images && track.album.images.length > 0 && (
                        <img
                          src={track.album.images[0].url}
                          alt={track.name}
                          className="w-12 h-12 object-cover mr-4 cursor-pointer"
                          onClick={() =>
                            handlePlayPause(track.id, track.preview_url)
                          }
                        />
                      )}

                      {playingTrackId === track.id && (
                        <div className="absolute inset-0 flex items-center justify-center right-3">
                          {audioRef.current.paused ? (
                            <FaPlay className="text-white text-2xl" />
                          ) : (
                            <FaPause className="text-white text-2xl" />
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
                      !audioRef.current.paused ? (
                        <FaPause className="text-xl text-white" />
                      ) : (
                        <FaPlay className="text-xl text-white" />
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
          <span className="flex w-full items-center justify-center text-white">
            No Products in Favorites
          </span>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Like;
