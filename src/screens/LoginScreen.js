import React, { useState } from "react";
import { 
View, 
Text, 
TextInput, 
TouchableOpacity, 
StyleSheet,
Image
} from "react-native";

export default function LoginScreen({ navigation }) {
const [nome, setNome] = useState("");
const [senha, setSenha] = useState("");

function entrar() {
  if (nome === "" || senha === "") {
    alert("Preencha nome e senha");
    return;
  }

  navigation.navigate("Categorias");
}

return (
<View style={styles.container}>

<Image 
source={require("../../assets/icon.png")} 
style={styles.logo}
/>

<Text style={styles.title}>ACADEMIA PRO</Text>

<TextInput
placeholder="Nome"
placeholderTextColor="#888"
style={styles.input}
value={nome}
onChangeText={setNome}
/>

<TextInput
placeholder="Senha"
placeholderTextColor="#888"
secureTextEntry
style={styles.input}
value={senha}
onChangeText={setSenha}
/>

<TouchableOpacity style={styles.button} onPress={entrar}>
  <Text style={styles.buttonText}>ENTRAR</Text>
</TouchableOpacity>

<Text style={styles.forgot}>Esqueceu sua senha?</Text>

</View>
);
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#0F0F0F",
alignItems:"center",
justifyContent:"center"
},

logo:{
width:100,
height:100,
marginBottom:20
},

title:{
color:"#fff",
fontSize:28,
fontWeight:"bold",
marginBottom:40
},

input:{
width:"80%",
backgroundColor:"#1F1F1F",
padding:15,
borderRadius:10,
marginBottom:15,
color:"#fff"
},

button:{
width:"80%",
backgroundColor:"#FF3B3B",
padding:15,
borderRadius:10,
alignItems:"center",
marginTop:10
},

buttonText:{
color:"#fff",
fontWeight:"bold",
fontSize:16
},

forgot:{
color:"#aaa",
marginTop:15
}

});