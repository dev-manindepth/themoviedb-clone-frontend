import { useEffect, useState } from "react";
import fetchDataFromApi, { ApiResponse } from "../utils/fetchDataFromApi";

interface IUseFetch {
  path: string;
  params?: {};
}
const BASE_URL = process.env.BASE_URL;
const useFetch = (endpoint: IUseFetch) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<null | boolean>(null);
  const [error, setError] = useState(null);

  const url = new URL(BASE_URL + endpoint.path, window.location.origin);
  if (endpoint.params) {
    const searchParams = new URLSearchParams(endpoint.params);
    url.search = searchParams.toString();
  }
  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);
    fetchDataFromApi(url.toString())
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
  }, [endpoint]);
  return [data, loading, error];
};
export default useFetch;
