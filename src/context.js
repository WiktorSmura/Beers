import React, {useState, useContext, useEffect} from "react";

const url1 = "https://api.punkapi.com/v2/beers";
const url2 = "https://api.punkapi.com/v2/beers?beer_name=";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [beers, setBeers] = useState([]);
  const [safeBeers, setSafeBeers] = useState([]);
  const [searchText, setSearchText] = useState("")

  const fetchBeers = async () => {
    const response = await fetch(`${url1}`);
    const data = await response.json();
    setSafeBeers(data);
    setBeers(data);
  };

  const refetchBeers = async () => {
    const response = await fetch(`${url2}${searchText}`);
    const data = await response.json();
    setBeers(data);
  };

  useEffect(() => {
    fetchBeers().then(() => setLoading(false));
  }, []);

  useEffect(() => {
    refetchBeers();
  }, [searchText]);

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
    <AppContext.Provider value={{loading, beers, filterBeers, setSearchText, searchText}}>
      {children}
    </AppContext.Provider>
  )
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppContext, AppProvider};
