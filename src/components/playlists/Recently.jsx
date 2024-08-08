import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const Recently = () => {
  const [data] = useFetch(
    "/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists"
  );
  const playlist = data?.playlists?.items;

  return (
    <div className="  bg-ten mx-auto  opacity-[90%]">
      <div className="container flex flex-col gap-3 ">
        <div className="flex w-full justify-between">
          <span className="text-3xl mt-10 ml-4">Recently played</span>
          <span className="text-xl mr-7 mt-10">see all</span>
        </div>
        <div className=" flex flex-wrap justify-between text-two gap-4 shadow-2xl  px-6 mt-10">
          {playlist?.slice(0, 4).map((item) => (
            <div key={item.id}>
              <Link to={`/single-page/${item.id}`}>
                <div className="some w-[152px]">
                  <img
                    src={item.images[0].url}
                    alt={item.name}
                    className="w-[152px] h-[152px]"
                  />
                  <p className="w-[182px]">{item.name}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recently;
