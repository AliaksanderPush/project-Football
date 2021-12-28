import { useState, useEffect } from "react";
import defaultAxios from "axios";

export const UseFetch = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    if (!opts.url) return;
    axiosInstance(opts)
      .then((response) => {
        setState({
          ...state,
          data: response.data,
          loading: false,
        });
      })

      .catch((error) => {
        setState({
          ...state,
          error,
          loading: false,
        });
      });
  }, [trigger]);

  return { ...state, refetch };
};
