import React, { useState, useEffect } from "react";

function Timer({ targetUnixTime }) {
    const [currentTime, setCurrentTime] = useState(Date.now());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(Date.now());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const timeRemaining = Math.max(targetUnixTime - Math.floor(currentTime / 1000), 0);

    const formatTime = (time) => {
        const days = Math.floor(time / 86400);
        const hours = Math.floor((time % 86400) / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        return `${days > 0 ? days : ""} ${days == 0 ? "" : days > 1 ? "days" : "day"} ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    return <>{formatTime(timeRemaining)}</>;
}

export default Timer;