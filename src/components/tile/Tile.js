import React from "react";

export const Tile = ({ item }) => {
  const itemValues = Object.values(item);
  
  return (
    <div className="tile-container">
      {itemValues.map((value, index) => {
        if (index === 0) {
          return (<p
                    key={index}
                    className="tile-title"
                  >
                    {value}
                  </p>)
        } else {
          return (<p
                    key={index}
                    className="tile"
                  >
                    {value}
                  </p>)
        }
      })}
    </div>
  );
};
