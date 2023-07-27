import { StyleSheet, Text, View } from "react-native";
import { Button } from "@ant-design/react-native";
import { Link } from "expo-router";

const OnBoarding2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>On boarding 2</Text>
        <Text>Be notified about the significant changes in your funds</Text>
        <Link href="/onboarding3">
          <Button>Next</Button>
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
    backgroundColor: "#24B4ED",
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

export default OnBoarding2;
