import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="onboarding1"  options={{ headerShown: false }} />
      <Stack.Screen name="onboarding2"  options={{ headerShown: false }} />
      <Stack.Screen name="onboarding3"  options={{ headerShown: false }} />
    </Stack>
  );
};

export default StackLayout;
