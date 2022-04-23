import React from "react";

const ListItems = ({ items }) => {
  const renderedList = items.map((item) => <li>{item}</li>);
  return <>{renderedList}</>;
};

export default ListItems;
