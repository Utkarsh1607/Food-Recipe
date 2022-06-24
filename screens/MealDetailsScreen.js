import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { useLayoutEffect, useContext } from "react";
import List from "../components/MealDetail/List";
import SubTitle from "../components/MealDetail/SubTitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/Dummy-Data";
import IconButton from "../components/IconButton";
import { FavouritesContext } from "../store/context/favourites-context";

const MealDetailsScreen = ({ route, navigation }) => {
  const favouriteMealsCtx = useContext(FavouritesContext);

  const mealID = route.params.mealID;

  const mealIsFavourite = favouriteMealsCtx.ids.includes(mealID);

  const selectedMeal = MEALS.find((meal) => meal.id === mealID);

  const changeFavouriteStatusHandler = () => {
    if (mealIsFavourite) favouriteMealsCtx.removeFavourites(mealID);
    else favouriteMealsCtx.addFavourites(mealID);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavouriteStatusHandler}
            icon={mealIsFavourite ? "star" : "star-outline"}
            color="white"
          />
        );
      },
    });
  }, [navigation, changeFavouriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        duration={selectedMeal.duration}
        textStyle={styles.detailText}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>INGREDIENTS</SubTitle>
          <List data={selectedMeal.ingredients} />

          <SubTitle>STEPS</SubTitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>

      {/* {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))} */}
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 320,
  },
  title: {
    margin: 8,
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "yellow",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
