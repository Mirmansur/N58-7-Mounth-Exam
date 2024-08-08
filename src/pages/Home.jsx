import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Main from "../components/playlists/Main";
import Recently from "../components/playlists/Recently";
import Made from "../components/playlists/Made";
import Jump from "../components/playlists/Jump";
import Uniquie from "../components/playlists/Uniquie";

const Home = () => {
  useEffect(() => {
    const getToken = async () => {
      try {
        const res = await fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
              "Basic " +
              btoa(
                import.meta.env.VITE_CLIENT_ID +
                  ":" +
                  import.meta.env.VITE_CLIENT_SECRET
              ),
          },
          body: "grant_type=client_credentials",
        });
        const auth = await res.json();

        localStorage.setItem(
          "access_token",
          `${auth.token_type} ${auth.access_token}`
        );
      } catch (error) {
        console.log(error);
      }
    };
    getToken();
  }, []);

  const [typs] = useFetch("/browse/categories/toplists/playlists");
  const toplists = typs?.playlists?.items;
  console.log(typs?.playlists?.items);

  return (
    <div className="inform flex items-start justify-center  ">
      <Header />
      <div className="container">
        <div className="biggest flex flex-col mx-auto px-4 py-6 bg-ten text-two w-[800px] ">
          <div className="class  scroll-my-px overflow-hidden  h-[600px] bg-seven ">
            <div className="container">
              <div className="purpur flex flex-col justify-center">
                <div className="btns p-2 ml-[60px] flex  items-center gap-3">
                  <button className="border-none w-[40px] h-[40px] bg-one text-two rounded-[50%] p-2">
                    <FaChevronLeft className=" flex justify-center text-[20px] " />
                  </button>
                  <button className="border-none w-[40px] h-[40px] bg-one text-two rounded-[50%] p-2">
                    <FaChevronRight className=" flex justify-center text-[20px] " />
                  </button>
                </div>
                <h1 className="text-two font-bold ml-[70px] mt-5 mb-10 text-3xl">
                  {" "}
                  Good afternoon{" "}
                </h1>
                <div className="flex flex-wrap justify-center gap-2">
                  {toplists?.map((item) => (
                    <div
                      key={item.id}
                      className="  flex w-[40%] items-center gap-5 font-semibold bg-eight   "
                    >
                      <img
                        src={item.images[0].url}
                        alt={item.name}
                        className="w-[82px] h-[82px]"
                      />
                      <p className=" text-two">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Main />
          <Made />
          <Recently />
          <Jump />
          <Uniquie />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
