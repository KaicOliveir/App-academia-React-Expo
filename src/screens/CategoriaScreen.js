import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";

import braco from "../../assets/img/braco.jpg";
import costas from "../../assets/img/costa.avif";
import gluteo from "../../assets/img/gluteo.jpg";
import peito from "../../assets/img/peito.jpeg";

const categorias = [
  { id: "1", nome: "Peito", imagem: peito },
  { id: "2", nome: "Braço", imagem: braco },
  { id: "3", nome: "Costas", imagem: costas },
  { id: "4", nome: "Glúteo", imagem: gluteo }
];

export default function CategoriasScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Treinos</Text>

      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}

        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Exercicios", { categoria: item.nome })}
          >

            <Image source={item.imagem} style={styles.imagem} />

            <View style={styles.overlay}>
              <Text style={styles.nome}>{item.nome}</Text>
            </View>

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
    paddingHorizontal: 20,
    paddingTop: 30
  },

  titulo: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 25
  },

  row: {
    justifyContent: "space-between"
  },

  card: {
    width: "48%",
    height: 180,
    borderRadius: 18,
    marginBottom: 20,
    overflow: "hidden",
    backgroundColor: "#222",
    elevation: 5
  },

  imagem: {
    width: "100%",
    height: "100%",
    position: "absolute"
  },

  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 12,
    backgroundColor: "rgba(0,0,0,0.35)"
  },

  nome: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});