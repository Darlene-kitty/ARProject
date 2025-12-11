import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MembersList from "../components/MembersList";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World AR</Text>
      <Text style={styles.subtitle}>Bienvenue en ISI4</Text>
      <Text style={styles.groupText}>Groupe X</Text>

      <MembersList />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/ar")}
      >
        <Text style={styles.buttonText}> Lancer l'expérience AR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6F4FE",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
    color: "#666",
  },
  groupText: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    color: "#007AFF",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
