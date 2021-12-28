import React from "react";
import { UseFetch } from "./UseFetch";

export const Fetch = ({
  uri,
  renderSuccess,
  loadingFallback,
  renderError = (error) => <pre>{JSON.stringify(error, null, 2)}</pre>,
}) => {
  const { loading, data, error } = UseFetch(uri);
  if (loading) return loadingFallback;
  if (error) return renderError(error);
  if (data) return renderSuccess({ data });
};
