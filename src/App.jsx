import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useFetch } from "./hooks/useFetch";
import Home from "./pages/Home";
import About from "./pages/About";
import Like from "./pages/Like";
import SinglePage from "./pages/SinglePage";

const App = () => {
  // const getPlaylist = async () => {
  //   try {
  //     const res = await fetch(
  //       "https://api.spotify.com/v1/browse",
  //       {
  //         headers: {
  //           Authorization: localStorage.getItem("access_token"),
  //         },
  //       }
  //     );
  //     const playlists = await res.json();

  //     const renderPlaylists = playlists.playlists.items;

  //     console.log(renderPlaylists);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // getPlaylist();

  return (
    <div className="">
      <div className="">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/like" element={<Like />} />
            <Route path="/single-page/:id" element={<SinglePage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
