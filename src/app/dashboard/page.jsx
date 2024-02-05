'use client';
import { useState, useEffect } from 'react';
import styles from './dashboard.module.css';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return <div>Dashboard</div>;
};

export default Dashboard;
