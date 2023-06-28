/* eslint-disable no-unused-vars */
import React from "react";
import { useJsonFetch } from "./hooks/useJsonFetch";

export default function ThirdComponent() {
  const [data, loading, error] = useJsonFetch(
    "https://use-json-fetch-b.vercel.app/loading",
    []
  );
  return <div className="component">{loading && "Идет загрузка..."}</div>;
}