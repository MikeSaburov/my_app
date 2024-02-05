'use client';
import { useState, useEffect } from 'react';
import styles from './dashboard.module.css';
import useSWR from 'swr';

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch(
  //       'https://jsonplaceholder.typicode.com/posts?_limit=15',
  //       { cache: 'no-store' }
  //     );
  //     if (!res.ok) {
  //       setError(true);
  //     }
  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData();
  // }, []);

  // console.log(data);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts?_limit=15',
    fetcher
  );
  if (error) return <div>ошибка загрузки</div>;
  if (isLoading) return <div>загрузка...</div>;
  console.log(data);
  return <div>DAshboard</div>;
};

export default Dashboard;
