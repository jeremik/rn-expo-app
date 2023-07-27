import { Redirect } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

const StartPage = () => {
  return (
    <SafeAreaProvider>
      <Redirect href="/onboarding1" />
    </SafeAreaProvider>
  );
};

export default StartPage;
