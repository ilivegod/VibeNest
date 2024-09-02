import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../constants/theme";
import { horizontalScale, verticalScale } from "../helpers/Metrics";
import Button from "../components/Button";
import { useRouter } from "expo-router";

const Welcome = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ marginTop: 15, flex: 1 }}>
      <View style={styles.TitleView}>
        <Text style={styles.TitleText}>
          Vibe<Text style={styles.TitleN}>N</Text>est
        </Text>
      </View>
      <View style={styles.LogoPhotoView}>
        <Image
          style={styles.Logo}
          source={require("../assets/images/mention/bro.png")}
        />
      </View>
      <View style={styles.DescriptionView}>
        <Text style={styles.DescriptionTitle}>
          Connect, Share, and Discover
        </Text>
        <Text style={styles.DescriptionText}>
          Join a community of people who share your interests. Connect with
          friends, share your moments, and discover new stories from around the
          world.
        </Text>
      </View>
      <View style={styles.ButtonView}>
        <Button
          onPress={() => {
            router.navigate("login");
          }}
          title="Get Started"
          style={styles.customButton}
          textStyle={styles.customButtonText}
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  TitleView: {
    paddingHorizontal: 10,
  },
  TitleText: {
    fontSize: 25,
    fontWeight: theme.fonts.bold,
    color: theme.colors.primaryDark,
    alignSelf: "center",
  },
  TitleN: {
    fontSize: 25,
    fontWeight: theme.fonts.bold,
    color: theme.colors.textDark,
    alignSelf: "center",
  },
  LogoPhotoView: {
    marginTop: 25,
    justifyContent: "center",
    alignSelf: "center",
  },
  Logo: {
    width: horizontalScale(300),
    height: verticalScale(270),
  },
  DescriptionView: {
    marginTop: 60,
  },
  DescriptionTitle: {
    fontSize: 20,
    fontWeight: theme.fonts.semiBold,
    color: theme.colors.primaryDark,
    alignSelf: "center",
    marginBottom: 20,
  },
  DescriptionText: {
    fontSize: 15,
    fontWeight: theme.fonts.medium,
    color: theme.colors.textDark,
    alignSelf: "center",
    textAlign: "center",
    width: horizontalScale(300),
  },
  customButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: verticalScale(15),
    borderRadius: theme.radius.md,
  },
  customButtonText: {
    color: theme.colors.textDark,
    fontWeight: theme.fonts.semiBold,
  },
  ButtonView: {
    paddingHorizontal: 20,
    width: "100%",
    position: "absolute",
    bottom: verticalScale(25),
  },
});
