import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();
  const onPressHandler = () => {
    navigation.navigate("Meal Details", {
      mealID: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onPressHandler}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          complexity={complexity}
          duration={duration}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    backgroundColor: "white",
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },

  buttonPressed: {
    opacity: 0.5,
  },
});
