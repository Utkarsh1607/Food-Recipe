import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  ids: [],
  addFavourites: (id) => {},
  removeFavourites: (id) => {},
});

const FavouritesContextProvider = ({ children }) => {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  const addFavourites = (id) => {
    setFavouriteMealIds((prevState) => [...prevState, id]);
  };

  const removeFavourites = (id) => {
    setFavouriteMealIds((prevState) =>
      prevState.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favouriteMealIds,
    addFavourites: addFavourites,
    removeFavourites: removeFavourites,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
