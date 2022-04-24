import { useState, useEffect } from "react";
import { Environments, FetchTypes } from "../data/enums";
import { FetchResultsType } from "../data/types";

type FetchPropsType = {
  url: string;
  type: FetchTypes;
};

const ERROR_MESSAGE_COPY =
  "Oops! Something went wrong. Hit the refresh button to try that again.";

export const ROOT_API_URL =
  // process.env.NODE_ENV === Environments.Prod
  //   ? process.env.REACT_APP_PROD_URL
  //   : process.env.REACT_APP_DEV_URL;
  process.env.REACT_APP_PROD_URL;

export const useFetch = <T>({
  url,
  type,
}: FetchPropsType): FetchResultsType<T> => {
  const [data, setData] = useState<T>({} as T);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const executeFetch = async (options?: any) => {
    setIsLoading(true);
    setData({} as T);
    setError(false);
    const res = await fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(ERROR_MESSAGE_COPY);
        }
        setIsLoading(false);
        return response.json();
      })
      .catch(() => {
        setData({} as T);
        setIsLoading(false);
        setError(true);
        setErrorMsg(ERROR_MESSAGE_COPY);
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
};
