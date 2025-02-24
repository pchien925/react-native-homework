import {
  View,
  Text,
  KeyboardType,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { ReactNode, useState } from "react";
import { appColors } from "../constants/appColor";
import { globalStyles } from "../styles/globalStyles";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

interface IProps {
  value: string;
  onChange: (value: string) => void;
  affix?: ReactNode;
  placeholder?: string;
  suffix?: ReactNode;
  isPassword?: boolean;
  allowClear?: boolean;
  keyboardType?: KeyboardType;
  onEnd?: () => void;
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.gray3,
    width: "100%",
    minHeight: 56,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    backgroundColor: appColors.white,
    marginBottom: 19,
  },
  input: {
    padding: 0,
    margin: 0,
    flex: 1,
    paddingHorizontal: 14,
    color: appColors.text,
  },
});

const InputComponent = (props: IProps) => {
  const {
    value,
    onChange,
    affix,
    placeholder,
    suffix,
    isPassword,
    allowClear,
    keyboardType,
    onEnd,
  } = props;

  const [isShowPassword, setIsShowPassword] = useState<boolean>(
    isPassword ?? false
  );
  return (
    <View style={styles.inputContainer}>
      {affix}

      <TextInput
        style={[styles.input, globalStyles.text]}
        value={value}
        placeholder={placeholder ?? ""}
        onChangeText={(value) => onChange(value)}
        secureTextEntry={isShowPassword}
        keyboardType={keyboardType ?? "default"}
        autoCapitalize="none"
        onEndEditing={onEnd}
        placeholderTextColor="#747688"
      />
      {suffix ?? suffix}
      <TouchableOpacity
        onPress={() =>
          isPassword ? setIsShowPassword(!isShowPassword) : onChange("")
        }
      >
        {isPassword ? (
          <FontAwesome
            name={isShowPassword ? "eye" : "eye-slash"}
            size={22}
            color={appColors.gray}
          />
        ) : (
          value.length > 0 &&
          allowClear && (
            <AntDesign name="close" size={22} color={appColors.gray} />
          )
        )}
      </TouchableOpacity>
    </View>
  );
};

export default InputComponent;
