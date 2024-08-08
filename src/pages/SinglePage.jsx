import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { CiHeart } from "react-icons/ci";
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FcDislike, FcLike } from "react-icons/fc";
import { addToLiked } from "../redux/slice/likeSlice";

const SinglePage = ({ product }) => {
  const { id } = useParams();
  const [data] = useFetch(`/playlists/${id}`);
  const [typs] = useFetch(`/playlists/${id}`);
  console.log(typs);
  console.log(data);
  const tracksList = data.tracks?.items;
  // console.log(tracksList[0].track.album.name);
  // const [list] = useFetch(`/featured-playlists/${id}`);
  // const playlists = list?.playlists?.items;

  // const playlistImage = data?.images[0].url;

  // console.log(playlistImage);

  const [playingTrackId, setPlayingTrackId] = useState(null);
  const audioRef = useRef(null);
  const dispatch = useDispatch();

  const { likedProducts } = useSelector((state) => state.likeReducer);
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

  const isProductLiked = (productId) => {
    return likedProducts.some((track) => track.id === productId);
  };

  const handleToggleLike = (track) => {
    dispatch(addToLiked(track));

    if (isProductLiked(track.id)) {
      console.log("product removed");
    } else {
      console.log("added product");
    }
  };
  return (
    <div className="music flex justify-center items-start">
      <Header />
      <div className="container   ">
        <div className="flexss  flex flex-col mx-auto px-4 py-6 bg-ten text-two w-[800px]">
          <div className="class bg-yellow ">
            <div className="btns p-2 ml-[20px] flex  items-center gap-3">
              <button className="border-none w-[40px] h-[40px] bg-one text-two rounded-[50%] p-2">
                <FaChevronLeft className=" flex justify-center text-[20px] " />
              </button>
              <button className="border-none w-[40px] h-[40px] bg-one text-two rounded-[50%] p-2">
                <FaChevronRight className=" flex justify-center text-[20px] " />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <div className="img flex items-center p-2 gap-10">
                {data.images?.map((image, index) => (
                  <img key={index} src={image.url} alt={"Product Image"} />
                ))}
                <div className="wordss">
                  <p className="font-sans text-xl font-medium ">
                    PUBLIC PLAYLIST
                  </p>
                  <h1 className="font-sans font-black text-8xl  ">Musics</h1>
                </div>
              </div>
              {/* <div className="flex flex-col gap-2">
                <span>{playlists?.[0]?.name}</span>
                <span>{playlists?.[0]?.owner.display_name}</span>
              </div> */}
            </div>
            {/* <div className="flex items-center gap-2">
              <CiHeart className="text-eleven" />
              <span>{playlists?.[0]?.tracks.total}</span>
            </div> */}
            {/* <div className="flex items-center gap-2">
              <FaPlay className="text-eleven" />
              <span>{tracksList?.length}</span>
            </div> */}
          </div>
          <table className="w-full border-none rounded-lg shadow-md">
            <thead className="bg-ten text-two">
              <tr>
                <th className="  text-left">Track</th>
                <th className="  text-left">Album</th>
                <th className="  text-left">Play</th>
              </tr>
            </thead>
            <tbody>
              {tracksList?.map((track) => (
                <tr key={track.track.id} className="border-b">
                  <td className="  flex items-center">
                    <div className="relative">
                      <img
                        src={track.track.album.images[0].url}
                        alt={track.track.album.name}
                        className="w-12 h-12 object-cover mr-4 cursor-pointer"
                        onClick={() =>
                          handleImageClick(
                            track.track.id,
                            track.track.preview_url
                          )
                        }
                      />

                      {playingTrackId === track.track.id && (
                        <div className="absolute inset-0 flex items-center justify-center right-3">
                          {audioRef.current.paused ? (
                            <FaPlay className="text-eleven text-2xl" />
                          ) : (
                            <FaPause className="text-eleven text-2xl" />
                          )}
                        </div>
                      )}
                    </div>
                    {track.track.name}
                  </td>
                  <td className="p-4">{track.track.album.name}</td>
                  <td className="p-4 flex items-center space-x-2">
                    <button
                      onClick={() =>
                        handlePlayPause(track.track.id, track.track.preview_url)
                      }
                      className="p-2 border-none bg-transparent"
                    >
                      {playingTrackId === track.track.id &&
                      !audioRef.current.paused ? (
                        <FaPause className="text-xl text-eleven " />
                      ) : (
                        <FaPlay className="text-xl text-eleven" />
                      )}
                    </button>
                    <button
                      onClick={() => handleToggleLike(track.track)}
                      className="rounded bg-indigo-100 p-2 text-slate-950 transition duration-300 active:scale-75"
                    >
                      {isProductLiked(track.track.id) ? (
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
          <div className="flex justify-center mt-10"></div>
          <audio ref={audioRef} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SinglePage;
