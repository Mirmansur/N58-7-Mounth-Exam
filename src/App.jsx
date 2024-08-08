import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Like from "./pages/Like";
import SinglePage from "./pages/SinglePage";
import Play from "./components/Play";
import Loading from "./components/Loading";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 1000);
    };

    handleRouteChange();

    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <Router>
      <div className="relative min-h-screen bg-gray-100">
        <div className="divs  flex justify-center items-start w-full bg-one">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/like" element={<Like />} />
            <Route path="/single-page/:id" element={<SinglePage />} />
          </Routes>
        </div>

        <Play />
      </div>
    </Router>
  );
};

export default App;
