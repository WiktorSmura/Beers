import React from "react";
import {useGlobalContext} from "../context";

function Buttons() {
  const {filterBeers} = useGlobalContext();
  return (
    <div className="buttons-container">
      <div className="buttons">
        <button className="btn" onClick={() => filterBeers("light")}>
          Light
        </button>
        <button className="btn" onClick={() => filterBeers("medium")}>
          Medium
        </button>
        <button className="btn" onClick={() => filterBeers("strong")}>
          Strong
        </button>
        <button className="btn" onClick={() => filterBeers("all")}>
          All
        </button>
      </div>
    </div>
  );
}

export default Buttons;
