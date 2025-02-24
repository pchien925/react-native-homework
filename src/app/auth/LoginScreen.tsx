import { View, Text, Button, Image, Switch } from "react-native";
import React, { useState } from "react";
import ContainerComponent from "@/src/components/ContainerComponent";
import SectionComponent from "@/src/components/SectionComponent";
import TextComponent from "@/src/components/TextComponent";
import SpaceComponent from "@/src/components/SpaceComponent";
import InputComponent from "@/src/components/InputComponent";
import Fontisto from "@expo/vector-icons/Fontisto";
import { appColors } from "@/src/constants/appColor";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import RowComponent from "@/src/components/RowComponent";
import ButtonComponent from "@/src/components/ButtonComponent";
import { useRouter } from "expo-router";

const LoginScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isRemember, setIsRemember] = useState<boolean>(true);
  const [isDisable, setIsDisable] = useState<boolean>(true);
  const router = useRouter();

  return (
    <ContainerComponent isImageBackground isScrollable back>
      <SectionComponent
        styles={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 75,
        }}
      >
        <Image
          source={require("@/src/assets/images/text-logo.png")}
          style={{
            width: 162,
            height: 114,
            marginBottom: 30,
          }}
        />
      </SectionComponent>
      <SectionComponent>
        <TextComponent size={24} title text="Sign in" />
        <SpaceComponent height={21} />
        <InputComponent
          value={email}
          placeholder="Email"
          onChange={(val) => setEmail(val)}
          allowClear
          affix={<Fontisto name="email" size={22} color={appColors.gray} />}
        />
        <InputComponent
          value={password}
          placeholder="Password"
          isPassword
          onChange={(val) => setPassword(val)}
          allowClear
          affix={<FontAwesome name="lock" size={22} color={appColors.gray} />}
        />
        <RowComponent justifyContent="space-between">
          <RowComponent onPress={() => setIsRemember(!isRemember)}>
            <Switch
              trackColor={{ true: appColors.primary }}
              thumbColor={appColors.white}
              value={isRemember}
              onChange={() => setIsRemember(!isRemember)}
            />
            <SpaceComponent width={4} />
            <TextComponent text="Remember me" />
          </RowComponent>
          <ButtonComponent
            text="Forgot password?"
            // onPress={() => router.push("/auth/ForgotPasswordScreen")}
            type="text"
          />
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent>
        <ButtonComponent
          disabled={isDisable}
          text="Sign in"
          type="primary"
          onPress={() => alert("Sign in")}
        />
      </SectionComponent>
      <SectionComponent>
        <RowComponent justifyContent="center">
          <TextComponent text="Don't have an account?" />
          <ButtonComponent
            type="link"
            text="Sign up"
            // onPress={() => router.push("/auth/RegisterScreen")}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default LoginScreen;
