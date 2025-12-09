import { View, StyleSheet } from "react-native";
import ARLayout from "../AR/ARlayout";

export default function ARScreen() {
  return (
    <View style={styles.container}>
      <ARLayout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
