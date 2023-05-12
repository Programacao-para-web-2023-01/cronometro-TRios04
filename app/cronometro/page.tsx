"use client";

import { useEffect, useState } from "react";
import Options from "@/app/cronometro/components/Options";

export default function Cronometro() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [start_stop, setStart_stop] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      if (start_stop == true) {
        setSeconds((atual) => {
          if (atual > 59) {
            setSeconds((atual) => 0);
            setMinutes((atual) => atual + 1);
          }
          return atual + 1;
        });
      }

    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, [start_stop]);
  useEffect(() => {
    if (minutes > 59) {
      setMinutes(0);
      setHours((atual) => atual + 1);
    }
  }, [minutes]);

  return (
    <main className="flex min-h-screen col items-center p-20">
      {hours}:{minutes}:{seconds}
      <Options
        onReset={() => {
          setHours(0), setMinutes(0), setSeconds(0);
        }}
        onStart={() => setStart_stop(true)}
        onPause={() => setStart_stop(false)}
      />
    </main>
  );
}
