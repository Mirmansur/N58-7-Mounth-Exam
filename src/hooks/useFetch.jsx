import { useEffect, useState } from "react";
import axios from "../api";
const useFetch = (URL) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const response = await axios(URL);
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [URL]);

  return [data, loading];
};
export { useFetch };
