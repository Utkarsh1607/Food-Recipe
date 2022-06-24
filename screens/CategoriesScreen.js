import { FlatList } from "react-native";
import CategoryGridTile from "../components/Category-grid-tile";
import { CATEGORIES } from "../data/Dummy-Data";

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("Meals Overview", {
        categoryID: itemData.item.id,
      });
    };

    // navigation.navigate("MealsOverview");

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
};

export default CategoriesScreen;
