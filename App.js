import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./screens/LoginScreen";
import CategoriasScreen from "./screens/CategoriasScreen";
import ExerciciosScreen from "./screens/ExerciciosScreen";
import DetalheExercicioScreen from "./screens/DetalheExercicioScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Categorias"
          component={CategoriasScreen}
        />

        <Stack.Screen
          name="Exercicios"
          component={ExerciciosScreen}
        />

        <Stack.Screen
          name="DetalheExercicio"
          component={DetalheExercicioScreen}
          options={{ title: "Exercício" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}