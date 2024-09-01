import { Button, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();

  return (
    <View>
      <Text>index</Text>
      <Button
        title="Go to Welcome "
        onPress={() => {
          router.navigate("welcome");
        }}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
