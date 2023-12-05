"use client";

import React, { useEffect, useState } from "react";
import useSWR from "swr";
import styles from "./page.module.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Dashboard = () => {
  // const [data, setData] = useState(null);
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts/",
    fetcher
  );

  console.log(data);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts/", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setError(true);
  //     }

  //     const data = await res.json();

  //     setIsLoading(false);
  //     setData(data);
  //   };
  //   getData();
  // }, []);

  /*
  The team behind Next.js has created a React hook library for data fetching called SWR. It is highly recommended if you are fetching data on the client-side. It handles caching, revalidation, focus tracking, refetching on intervals, and more.

  Using the same example as above, we can now use SWR to fetch the profile data. SWR will automatically cache the data for us and will revalidate the data if it becomes stale.
  */

  return <div>Dashboard</div>;
};

export default Dashboard;
