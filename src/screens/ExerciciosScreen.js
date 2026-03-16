import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { exercicios } from "../data/exercicios";

export default function ExerciciosScreen({ route, navigation }) {
  const { categoria } = route.params;

  const lista = exercicios[categoria] || [];
  console.log("categoria:", categoria);
  console.log("lista:", lista);
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>{categoria}</Text>

    <FlatList
      data={lista}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            console.log("clicou", item.nome);
            navigation.navigate("DetalheExercicio", { exercicio: item });
          }}
        >
          <View>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.info}>{item.series} • {item.reps}</Text>
          </View>

          <Text style={styles.botao}>▶</Text>
        </TouchableOpacity>
      )}
/>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
    padding: 20
  },

  titulo: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20
  },

  card: {
    backgroundColor: "#1c1c1c",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  nome: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },

  info: {
    color: "#aaa",
    marginTop: 5
  },

  botao: {
    color: "#00ff88",
    fontSize: 22
  }

});