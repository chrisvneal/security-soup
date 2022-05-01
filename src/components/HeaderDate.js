import React from "react";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const HeaderDate = () => {
  const time = new Date();

  const month = time.getMonth();
  const day = time.getDate();
  const year = time.getFullYear();
  const dayOfWeek = time.getDay();

  const date = `${day} ${months[month]} ${year}`;

  const hour = time.getHours();
  const minutes =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  //   const seconds = time.getSeconds();
  const clock = `${hour}:${minutes}:`;

  setInterval(() => {
    const seconds =
      new Date().getSeconds() < 10
        ? "0" + new Date().getSeconds()
        : new Date().getSeconds();
    document.querySelector(".seconds").textContent = `${seconds}`;
  }, 1000);

  return (
    <div className="header-date">
      <span className="day-of-week">{days[dayOfWeek]}</span>
      {date}
      <span className="time">
        {clock}
        <span className="seconds">{new Date().getSeconds()}</span>
      </span>
    </div>
  );
};

export default HeaderDate;
