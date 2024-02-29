import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Routes from "./src/router/Router";

export default function App() {
  return (
    <View style={styles.container}>
      <Routes></Routes>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
