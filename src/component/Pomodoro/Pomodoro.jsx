import React, { useEffect, useState } from "react";
import "./Pomodoro.css";

function Pomodoro() {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [inputHours, setInputHours] = useState(0);
  const [inputMinutes, setInputMinutes] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [breakRunning, setBreakRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (timerRunning && totalSeconds > 0) {
      interval = setInterval(() => {
        setTotalSeconds((totalSeconds) => totalSeconds - 1);
      }, 1000);
    } else if (timerRunning && totalSeconds === 0) {
      setBreakRunning(true);
      setTimerRunning(false);
      setTotalSeconds(15 * 60);
    } else if (breakRunning && totalSeconds > 0) {
      interval = setInterval(() => {
        setTotalSeconds((totalSeconds) => totalSeconds - 1);
      }, 1000);
    } else if (breakRunning && totalSeconds === 0) {
      setBreakRunning(false);
      setInputHours(0);
      setInputMinutes(0);
      setInputSeconds(0);
    }
    return () => clearInterval(interval);
  }, [timerRunning, breakRunning, totalSeconds]);

  function handleStartClick() {
    const totalSeconds = inputHours * 3600 + inputMinutes * 60 + inputSeconds;
    setTotalSeconds(totalSeconds);
    setTimerRunning(true);
  }

  function handleStopClick() {
    setTotalSeconds(0);
    setTimerRunning(false);
    setInputHours(0);
    setInputMinutes(0);
    setInputSeconds(0);
    setBreakRunning(false);
  }

  function handleHoursInputChange(event) {
    setInputHours(Number(event.target.value));
  }

  function handleMinutesInputChange(event) {
    setInputMinutes(Number(event.target.value));
  }

  function handleSecondsInputChange(event) {
    setInputSeconds(Number(event.target.value));
  }

  function formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return (
      String(hours).padStart(2, "0") +
      ":" +
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0")
    );
  }

  return (
    <div className="container">
      <div className="box">
        {timerRunning || breakRunning ? (
          <h1 className="timer">
            {timerRunning ? "Timer: " : "Break: "}
            {formatTime(totalSeconds)}
          </h1>
        ) : (
          <div className="pom_title">
            <h1>Pomodoro Timer</h1>
          </div>
        )}
        {timerRunning || breakRunning ? (
          <div className="start_stop">
            <button className="btn" onClick={handleStopClick}>
              Stop
            </button>
          </div>
        ) : (
          <div className="start_stop">
            <button className="btn" onClick={handleStartClick}>
              Start
            </button>
          </div>
        )}
        {!timerRunning && !breakRunning && (
          <div className="input_container">
            <div>
              <label className="label_container" htmlFor="hours-input">
                Hours:
              </label>
              <input
                className="input_insert"
                id="hours-input"
                type="number"
                value={inputHours}
                onChange={handleHoursInputChange}
              />
            </div>
            <div>
              <label className="label_container" htmlFor="minutes-input">
                Minutes:
              </label>
              <input
                className="input_insert"
                id="minutes-input"
                type="number"
                value={inputMinutes}
                onChange={handleMinutesInputChange}
              />
            </div>
            <div>
              <label className="label_container" htmlFor="seconds-input">
                Seconds:
              </label>
              <input
                className="input_insert"
                id="seconds-input"
                type="number"
                value={inputSeconds}
                onChange={handleSecondsInputChange}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Pomodoro;
