import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "@ant-design/react-native";
import { Link } from "expo-router";

const OnBoarding1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>On boarding 1</Text>
        <Image
          source={require("../../assets/images/launch/onboarding1.png")}
          style={styles.image}
        ></Image>

        <Text>The easy way to view your fund performance</Text>
        <Link href="/onboarding2">
          <Text style={styles.title}>Next</Text>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#0072E6",
    color: "white",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  image: {
    resizeMode: "contain",
    justifyContent: "center",
  },
});

export default OnBoarding1;
