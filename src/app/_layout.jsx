import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors } from "../styles/globalStyle";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
        <StatusBar style="dark" backgroundColor={colors.backgroundScreen}/>
        <Stack 
            initialRouteName="(protected)"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="login" />
            <Stack.Screen name="signUp" />
            <Stack.Screen name="(protected)" />
        </Stack>
    </SafeAreaProvider>
  );
}