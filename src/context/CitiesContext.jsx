import { createContext, useEffect, useState } from "react";

const CitiesContext = createContext();

const CITIES_URL = "https://apidata-zkgz.onrender.com/cities";

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${CITIES_URL}`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider value={{cities, isLoading}}>
    {children}
    </CitiesContext.Provider>
  )
};

export {CitiesProvider};
