import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors } from "../styles/globalStyle";

export default function RootLayout() {
    useEffect(() => {
    NavigationBar.setButtonStyleAsync("dark");
  }, []);
  
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" backgroundColor={colors.backgroundScreen}/>

      <Stack screenOptions={{ 
        headerShown: false,
        contentStyle: {
        backgroundColor: colors.backgroundScreen,
    }, 
        }}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="delivery"/>
        <Stack.Screen name="itemDetail"/>
        <Stack.Screen name="(tabs)"/>
      </Stack>
    </SafeAreaProvider>
  );
}