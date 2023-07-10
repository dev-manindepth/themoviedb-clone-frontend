import { useEffect, useState } from "react";
import fetchDataFromApi, { ApiResponse } from "../utils/fetchDataFromApi";

const useFetch = (url: string) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<null | boolean>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);
    fetchDataFromApi(url)
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setData(null);
        setLoading(false);
        setError(err);
      });
  }, [url]);
  return [data, loading, error];
};
export default useFetch;
