/* eslint-disable no-unused-vars */
import React from "react";
import { useJsonFetch } from "./hooks/useJsonFetch";

export default function SecondComponent() {
  const [data, loading, error] = useJsonFetch(
    "https://use-json-fetch-b.vercel.app/error",
    []
  );
  return <div className="component">{error}</div>;
}