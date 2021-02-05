import React, { useState, useEffect } from "react";
import Beer from "./components/Beer";
import Buttons from "./components/Buttons";

function App() {
  const url = "https://api.punkapi.com/v2/beers";
  const [loading, setLoading] = useState(true);
  const [beers, setBeers] = useState([]);
  const [safeBeers, setSafeBeers] = useState([]);

  const fetchBeers = async () => {
    const response = fetch(url);
    const fetchedBeers = await (await response).json();
    setSafeBeers(fetchedBeers);
    setBeers(fetchedBeers);
  };

  const filterBeers = (power) => {
    if (power === "light") {
      const lightBeers = safeBeers.filter((beer) => beer.abv <= 4.5);
      setBeers(lightBeers);
    } else if (power === "medium") {
      const mediumBeers = safeBeers.filter(
        (beer) => beer.abv > 4.5 && beer.abv < 7.5
      );
      setBeers(mediumBeers);
    } else if (power === "strong") {
      const strongBeers = safeBeers.filter((beer) => beer.abv >= 7.5);
      setBeers(strongBeers);
    } else if (power === "all") {
      setBeers(safeBeers);
    }
  };

  useEffect(() => {
    fetchBeers().then(() => setLoading(false));
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <header>
        <h1>Beeeeers</h1>
        <div className="underline"></div>
      </header>
      <Buttons filterBeers={filterBeers} />
      <section className="all-beers">
        {beers.map((beer) => {
          return <Beer key={beer.id} {...beer} />;
        })}
      </section>
    </>
  );
}

export default App;
