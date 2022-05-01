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

const HeaderDate = () => {
  const time = new Date();

  const month = time.getMonth();
  const day = time.getDate();
  const year = time.getFullYear();
  const date = `${day} ${months[month]} ${year}`;

  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const clock = `${hour}:${minutes}:${seconds}`; //   console.log(months[month]);

  //   setInterval(() => {
  //     console.log(time);
  //   }, 1000);

  return (
    <div className="header-date">
      {date}
      {clock}
    </div>
  );
};

export default HeaderDate;
