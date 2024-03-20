import React, { useState, FC, useEffect } from 'react';
import styles from '@/styles/Home.module.css';

interface CountDownProps {
  endTime: number;
}

export const CountDown: FC<CountDownProps> = ({ endTime }) => {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    if (endTime > Date.now() / 1000) {
      const interval = setInterval(() => {
        const remainingTime = Number(endTime) - Math.round(Date.now() / 1000);
        const days = Math.floor(remainingTime / 86400);
        const hours = Math.floor((remainingTime % 86400) / 3600);
        const mins = Math.floor((remainingTime % 3600) / 60);
        const secs = Math.floor(remainingTime % 60);
        setTimer({
          days,
          hours,
          mins,
          secs,
        });
      }, 1000);
      return () => {
        clearInterval(interval);
      }; 
    }
  }, [endTime]);

  return (
    <div className={`${styles['time-count-down-container']}`}>
      <div className={`${styles['time-box']}`}>{timer.days}d</div>
      <div className={`${styles['time-box']}`}>{timer.hours}h</div>
      <div className={`${styles['time-box']}`}>{timer.mins}m</div>
      <div className={`${styles['time-box']}`}>{timer.secs}s</div>
    </div>
  );
};