import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavouritesContextProvider from "./store/context/favourites-context";
// import { CATEGORIES } from "./data/Dummy-Data";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#3f2f20",
        },
        drawerContentStyle: {
          backgroundColor: "#351401",
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ size, color }) => (
            <Ionicons size={size} color={color} name="list" />
          ),
        }}
      />

      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons size={size} color={color} name="star" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavouritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#351401",
              },
              headerTintColor: "white",
              contentStyle: {
                backgroundColor: "#3f2f20",
              },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Meals Overview"
              component={MealsOverviewScreen}

              // 1ST WAY OF SETTING HEADERS DATA!
              // options={({ navigation, route }) => {
              //   const catID = route.params.categoryID;
              //   const catTitle = CATEGORIES.find(
              //     (item) => item.id === catID
              //   ).title;
              //   return { title: catTitle };
              // }}
            />
            <Stack.Screen
              name="Meal Details"
              component={MealDetailsScreen}
              options={{
                title: "About the Meal!",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouritesContextProvider>
    </>
  );
}

// const styles = StyleSheet.create({});
