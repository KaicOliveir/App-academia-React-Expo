import React from "react";
import { View, Text, StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function DetalheExercicioScreen({ route }) {

  const { exercicio } = route.params;

  return (
    <View style={styles.container}>

      <Text style={styles.nome}>{exercicio.nome}</Text>

      <YoutubePlayer
        height={220}
        play={false}
        videoId={exercicio.video}
      />

      <Text style={styles.info}>
        {exercicio.series} • {exercicio.reps}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
    padding: 20
  },

  nome: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20
  },

  info: {
    color: "#aaa",
    marginTop: 15
  }

});