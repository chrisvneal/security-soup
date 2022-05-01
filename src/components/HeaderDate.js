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
  //   console.log(months[month]);

  const date = `${day} ${months[month]} ${year}`;

  //   setInterval(() => {
  //     console.log(time);
  //   }, 1000);

  return <div className="header-date">{date}</div>;
};

export default HeaderDate;
