import { useLayoutEffect } from "react";
import MealsList from "../components/mealsList/MealsList";
import { CATEGORIES, MEALS } from "../data/Dummy-Data";
// import { useRoute } from "@react-navigation/native";

const MealsOverviewScreen = ({ navigation, route }) => {
  //   const route = useRoute();
  const catID = route.params.categoryID;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  useLayoutEffect(() => {
    const displayedTitle = CATEGORIES.find(
      (category) => category.id === catID
    ).title;

    navigation.setOptions({
      title: displayedTitle,
    });
  }, [catID, navigation]);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
