import { View, Text, StyleSheet } from "react-native";

const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.itemDetail, textStyle]}>{duration} Mins</Text>
      <Text style={[styles.itemDetail, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.itemDetail, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  itemDetail: {
    marginHorizontal: 4,
  },
});
