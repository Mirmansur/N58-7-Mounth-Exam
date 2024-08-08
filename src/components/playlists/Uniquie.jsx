import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const Unique = () => {
  const [data] = useFetch(
    "/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists"
  );
  const playlist = data?.playlists?.items;
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="  bg-ten mx-auto  opacity-[90%] mb-20">
      <div className="container flex flex-col gap-3 ">
        <div className="flex w-full justify-between">
          <span className="text-3xl mt-10 ml-4">Uniquely yours</span>
          <h2
            className="text-xl mr-7 mt-10 cursor-pointer"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "See All"}
          </h2>{" "}
        </div>
        <div className=" flex flex-wrap justify-between text-two gap-4 shadow-2xl  mt-10">
          {playlist &&
            (showAll ? playlist : playlist.slice(0, 4)).map((item) => (
              <div key={item.id}>
                <Link to={`/single-page/${item.id}`}>
                  <div className="some w-[170px] h-[220px] bg-yellow flex flex-col items-center justify-center rounded-xl">
                    <img
                      src={item.images[0].url}
                      alt={item.name}
                      className="w-[152px] h-[152px]"
                    />
                    <p className="mt-3">{item.name}</p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Unique;
