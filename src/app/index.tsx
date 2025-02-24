import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View } from "react-native";
import SplashScreen from "./SplashScreen";
import HomeScreen from "./home/HomeScreen";
import LoginScreen from "./auth/LoginScreen";
import OnBoardingScreen from "./OnBoardingScreen";

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState<boolean>(true);

  const [accessToken, setAccessToken] = useState<string | null>(null);

  const { getItem, setItem } = useAsyncStorage("token");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const token = await getItem();
    console.log("token: ", token);
    token && setAccessToken(token);
  };

  return (
    <>
      {isShowSplash ? (
        <SplashScreen />
      ) : accessToken ? (
        <HomeScreen />
      ) : (
        <OnBoardingScreen />
      )}
    </>
  );
};

export default App;
