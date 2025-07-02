import { StyleSheet,Text,View,Image,ImageBackground,useWindowDimensions,TextInput} from "react-native";
import {AsyncStorage} from '@react-native-async-storage/async-storage'
import { useState } from "react";
import { useFonts, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { width } = useWindowDimensions();
  const [fontLoaded] = useFonts({
    Montserrat_700Bold,
  });
  if (!fontLoaded) {
    return <AppLoading />;
  }
  
  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <ImageBackground
        source={require("./assets/Background.png")}
        style={[styles.image, { borderRadius: width * 0.1 }]}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Minhas Finanças</Text>
        <TextInput
          style={styles.inputName}
          onChangeText={setName}
          placeholder="Digite aqui seu nome"
        />
        <TextInput
          style={styles.inputEmail}
          onChangeText={setEmail}
          placeholder="Digite aqui seu email"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "50%",
    marginTop: "10%",
    overflow: "hidden",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 30,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 20,
  },
  inputName: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    width: "90%",
    padding: 10,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  inputEmail: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    width: "90%",
    padding: 10,
    backgroundColor: "#fff",
    fontSize: 16,
  },
});
