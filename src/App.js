import React from "react";
import Beer from "./components/Beer";
import Buttons from "./components/Buttons";
import Search from "./components/Search"
import {useGlobalContext} from "./context"

function App() {
  const {loading, beers, searchText} = useGlobalContext();

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
      <Search />
      <section className="all-beers">
        {beers.length ? beers.map((beer) => {
          return <Beer key={beer.id} {...beer} />;
        }) : searchText.length === 0 ? <h1>Search something or choose category above</h1> : <h1>Haven't got that in database</h1>}
      </section>
    </React.Fragment>
  );
}

export default App;
