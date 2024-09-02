import { Button, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <Text>indexdsd</Text>
      <Button
        title="Go to Welcome "
        onPress={() => {
          router.navigate("welcome");
        }}
      />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
