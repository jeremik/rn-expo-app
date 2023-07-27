import { Stack, useSearchParams } from "expo-router";
import { View, Text } from "react-native";

const ItemDetailsPage = () => {
  const { id } = useSearchParams();

  return (
    <View>
      <Stack.Screen options={{ headerTitle: `Details #${id}` }} />
      <Text>Item Details: {id}</Text>
    </View>
  );
};

export default ItemDetailsPage;
