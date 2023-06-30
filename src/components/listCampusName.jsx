import React from "react";

export default function ListCampusName(props) {
  console.log("LIST CAMPUS NAME COMPONENT");
  return props.list ? (
    props.list.map((item) => {
      return (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <img src={item.imageUrl} alt={item.name} />
        </div>
      );
    })
  ) : (
    <h1>Loading...</h1>
  );
}