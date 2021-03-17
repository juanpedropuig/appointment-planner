import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = ({ ObjArr }) => {
  return (
    <div>
      {ObjArr.map((item, index) => {
        return  <Tile
                  item={item}
                  key={index}
                />
      })}
    </div>
  );
};
