import React, { useState, useEffect } from "react";
import Beer from "./components/Beer";
import Buttons from "./components/Buttons";
import {useGlobalContext} from "./context"

function App() {
  const {loading, beers} = useGlobalContext();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <React.Fragment>
      <header>
        <h1>Beeeeers</h1>
        <div className="underline"></div>
      </header>
      <Buttons />
      <section className="all-beers">
        {beers.map((beer) => {
          return <Beer key={beer.id} {...beer} />;
        })}
      </section>
    </React.Fragment>
  );
}

export default App;
