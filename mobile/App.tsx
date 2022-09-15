import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NLW eSports</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Começar agora</Text>
      </TouchableOpacity>
      <Text style={styles.small}>Um app de teste para você</Text>
      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#091217",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#a0b8ff",
    fontSize: 36,
    padding: 16,
  },
  text: {
    color: "#f0f0f9",
    fontSize: 22,
  },
  small: {
    color: "#707580",
    fonsSize: 16,
  },
  button: {
    backgroundColor: "#1f2469",
    padding: 20,
    margin: 20,
  },
});
