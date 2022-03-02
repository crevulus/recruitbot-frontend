import { useState, useEffect } from "react";
import { FetchTypes } from "../data/enums";
import { RootDataType } from "../data/types";

type FetchPropsType = {
  url: string;
  type: FetchTypes;
};

function useFetch({ url, type }: FetchPropsType) {
  const [data, setData] = useState<RootDataType>({} as RootDataType);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const executeFetch = async (options?: any) => {
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
  };

  useEffect(() => {
    if (type === FetchTypes.Get) {
      executeFetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isLoading, error, errorMsg, executeFetch };
}

export default useFetch;
