import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";

// const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    height: deviceHeight / 4,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
