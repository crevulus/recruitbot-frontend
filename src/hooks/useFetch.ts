import { useState, useEffect } from "react";
import { Environments, FetchTypes } from "../data/enums";
import { RootDataType } from "../data/types";

type FetchPropsType = {
  url: string;
  type: FetchTypes;
};

const ERROR_MESSAGE_COPY =
  "Oops! Something went wrong. Hit the refresh button to try that again.";

export const ROOT_API_URL =
  process.env.NODE_ENV === Environments.Dev
    ? "http://localhost:8000"
    : "https://my-json-server.typicode.com/crevulus/recruitbot-frontend";

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
        if (!response.ok) {
          throw new Error(ERROR_MESSAGE_COPY);
        }
        setIsLoading(false);
        return response.json();
      })
      .catch((error) => {
        setData({} as RootDataType);
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
}

export default useFetch;
