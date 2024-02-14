'use client';
import { useState, useEffect } from 'react';
import styles from './dashboard.module.css';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';

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

  const session = useSession();
  console.log(session);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts?_limit=15',
    fetcher
  );
  if (error) return <div>Ошибка загрузки</div>;
  if (isLoading) return <div>Загрузка...</div>;

  return <div>Dashboard</div>;
};

export default Dashboard;
