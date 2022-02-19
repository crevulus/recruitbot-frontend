import { useState, useEffect } from "react";
import { RootDataType } from "../data/types";

type FetchPropsType = {
  url: string;
  options?: Record<string, unknown>;
};

function useFetch({ url, options }: FetchPropsType) {
  const [data, setData] = useState<RootDataType>({} as RootDataType);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setData({} as RootDataType);
      setError(false);
      const res = await fetch(url, options)
        .then((response) => {
          setIsLoading(false);
          return response.json();
        })
        .catch((error) => {
          setIsLoading(false);
          setError(true);
          setErrorMsg(error.message);
        });
      setData(res);
    })();
  }, [url, options]);

  return { data, isLoading, error, errorMsg };
}

export default useFetch;
