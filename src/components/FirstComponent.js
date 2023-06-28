/* eslint-disable no-unused-vars */
import React from "react";
import { useJsonFetch } from "./hooks/useJsonFetch";

export default function Component() {
  const [data, loading, error] = useJsonFetch(
    "https://use-json-fetch-b.vercel.app/data",
    []
  );
  return <div className="component">{data.status}</div>;
}