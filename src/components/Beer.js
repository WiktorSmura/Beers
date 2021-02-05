import React from "react";

function Beer({ name, image_url, description, abv }) {
  return (
    <div className="beer-card">
      <img src={image_url} alt={name} />
      <h1>{name}</h1>
      <p className="description">{description}</p>
      <div className="abv-cont">
        <p className="abv">{abv}%</p>
      </div>
    </div>
  );
}

export default Beer;
