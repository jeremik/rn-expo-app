import { Image, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

const OnBoarding3 = () => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image
          source={require("../../assets/images/AM-Insights-Logo.png")}
          style={styles.logo}
        ></Image>
        <Image
          source={require("../../assets/images/launch/onboarding3.png")}
          style={styles.imageOnboard}
        ></Image>
        <View>
          <Text style={styles.subTitle}>
            Be notified about the significant changes in your funds
          </Text>
        </View>
        <Link href="/login" style={styles.button}>
          <Text>Login</Text>
        </Link>

        <Link href="" style={styles.subOption}>
          <Text>Don’t have an account?</Text>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 12,
    backgroundColor: "#0072E6",
    color: "white",
  },
  main: {
    flex: 1,
    justifyContent: "space-evenly",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  subTitle: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 32,
    fontWeight: "600",
    color: "white",
    lineHeight: 38,
    textAlign: "left",
  },
  button: {
    textAlign: "center",
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    color: "#007AFF",
  },
  subOption: {
    textAlign: "center",
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  logo: {
    justifyContent: "flex-start",
    resizeMode: "contain",
  },
  imageOnboard: {
    justifyContent: "center",
    resizeMode: "contain",
    width: "auto",
  },
});

export default OnBoarding3;
