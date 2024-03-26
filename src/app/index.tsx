import { View, Pressable, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

const Home: React.FC = () => {
  const startScan = () => {
    router.push("scanner");
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={startScan}>
        <Text style={styles.text}>Scan QR code</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Home;
