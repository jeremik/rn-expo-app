import { StyleSheet, Text, View } from "react-native";
import { Button } from "@ant-design/react-native";
import { Link } from "expo-router";

const OnBoarding3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>On boarding 3</Text>
        <Text>Get the information you need, when you need it</Text>
      </View>
      <Link href="/onboarding2">
        <Button>Login</Button>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#0072E6",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});

export default OnBoarding3;
