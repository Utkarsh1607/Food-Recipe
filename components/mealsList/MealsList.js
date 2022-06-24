import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

const MealsList = ({ items }) => {
  function renderMealItem(mealItem) {
    return (
      <MealItem
        title={mealItem.item.title}
        imageUrl={mealItem.item.imageUrl}
        duration={mealItem.item.duration}
        complexity={mealItem.item.complexity}
        affordability={mealItem.item.affordability}
        id={mealItem.item.id}
      />
    );
  }

  return (
    <View style={styles.mealsContainer}>
      {/* <Text>Meals Overview Screen :{catID}</Text> */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  mealsContainer: {
    flex: 1,
    padding: 16,
  },
});
