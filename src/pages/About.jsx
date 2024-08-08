import { useEffect } from "react";
// import { useFetch } from "../hooks/useFetch";

const About = () => {
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

  // const [number] = useFetch("/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists");
  // const categiri = number?.playlists?.items;
  // console.log(number?.playlists?.items);
};

export default About;
