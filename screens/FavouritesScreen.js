import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/mealsList/MealsList";
import { MEALS } from "../data/Dummy-Data";
import { FavouritesContext } from "../store/context/favourites-context";

const FavouritesScreen = () => {
  const favouriteMealsCtx = useContext(FavouritesContext);

  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealsCtx.ids.includes(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no Favorites yet...</Text>
      </View>
    );
  }

  return <MealsList items={favouriteMeals} />;
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
