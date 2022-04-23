import React from "react";

const ListItems = ({ items }) => {
  const renderedList = items.map((item) => <li>{item.name}</li>);
  console.log(renderedList);
  return <>{renderedList}</>;
};

export default ListItems;
