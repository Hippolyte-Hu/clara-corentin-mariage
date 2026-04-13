import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
  labels: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate, labels }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-4 md:gap-8 text-center text-white">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <span className="text-3xl md:text-5xl font-serif font-bold tabular-nums">
            {value < 10 ? `0${value}` : value}
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-widest mt-1 opacity-80">
            {labels[unit as keyof typeof labels]}
          </span>
        </div>
      ))}
    </div>
  );
};