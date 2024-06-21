import React, { createContext, useState, useEffect } from 'react';

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favoriteCities, setFavoriteCities] = useState([]);

  useEffect(() => {
    const storedCities = JSON.parse(localStorage.getItem("favoriteCities")) || [];
    setFavoriteCities(storedCities);
  }, []);

  const addCityToFavorites = (city) => {
    const updatedCities = [...favoriteCities, city];
    setFavoriteCities(updatedCities);
    localStorage.setItem("favoriteCities", JSON.stringify(updatedCities));
  };

  const removeCityFromFavorites = (city) => {
    const updatedCities = favoriteCities.filter(favoriteCity => favoriteCity !== city);
    setFavoriteCities(updatedCities);
    localStorage.setItem("favoriteCities", JSON.stringify(updatedCities));
  };

  return (
    <FavouritesContext.Provider value={{ favoriteCities, addCityToFavorites, removeCityFromFavorites }}>
      {children}
    </FavouritesContext.Provider>
  );
};
