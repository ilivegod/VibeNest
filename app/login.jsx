import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomBackButton from "../components/CustomBackButton";
import CustomTextInput from "../components/CustomTextInput";
import { horizontalScale, verticalScale } from "../helpers/Metrics";
import Feather from "@expo/vector-icons/Feather";

const Login = () => {
  return (
    <SafeAreaView style={{ paddingHorizontal: 15 }}>
      <View>
        <CustomBackButton />
      </View>
      <View>
        <CustomTextInput
          placeholder="Enter your email"
          placeholderTextColor="#7C7C7C"
        />
      </View>
      <View>
        <CustomTextInput
          placeholder="Enter your password"
          placeholderTextColor="#7C7C7C"
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
