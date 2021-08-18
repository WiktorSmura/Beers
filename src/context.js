import React, {useState, useContext, useEffect} from "react";

const url = "https://api.punkapi.com/v2/beers";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [beers, setBeers] = useState([]);
  const [safeBeers, setSafeBeers] = useState([]);

  const fetchBeers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setSafeBeers(data);
    setBeers(data);
  };

  useEffect(() => {
    fetchBeers().then(() => setLoading(false));
  }, []);

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

  return (
    <AppContext.Provider value={{loading, beers, filterBeers}}>
      {children}
    </AppContext.Provider>
  )
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppContext, AppProvider};
