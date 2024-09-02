import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { theme } from "../constants/theme";

const CustomBackButton = () => {
  return (
    <View>
      <Ionicons name="chevron-back-circle-outline" size={35} color="#00AC62" />
    </View>
  );
};

export default CustomBackButton;

const styles = StyleSheet.create({});
