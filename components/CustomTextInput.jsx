import { StyleSheet, Text, View, TextInput } from "react-native";
import { theme } from "../constants/theme";
import { useState } from "react";
import { horizontalScale, verticalScale } from "../helpers/Metrics";

const CustomTextInput = (props) => {
  return (
    <View
      style={[
        styles.input,
        props.InputContainerStyle && props.InputContainerStyle,
      ]}
    >
      {props.icon && props.icon}
      <TextInput
        onChangeText={props.onChangeText}
        ref={props.inputRef && props.inputRef}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        keyboardType={props.keyboardType}
        {...props}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    height: verticalScale(49),
    marginTop: 12,
    padding: 10,
    borderRadius: theme.radius.xs,
    backgroundColor: theme.colors.darkLight,
    justifyContent: "center",
  },
});
