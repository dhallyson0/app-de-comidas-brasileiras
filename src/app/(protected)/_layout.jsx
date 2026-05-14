import * as NavigationBar from "expo-navigation-bar";
import { Redirect, Stack } from "expo-router";
import { useEffect, } from "react";
import { ActivityIndicator, View } from "react-native";
import { useAuth } from "../../context/authContext";
import { CartProvider } from "../../context/cartContext";
import { OrdersProvider } from "../../context/ordersContext";
import { colors } from "../../styles/globalStyle";

export default function ProtectedLayoutt() {
    useEffect(() => {
    NavigationBar.setButtonStyleAsync("dark");
  }, []);

  const { user, carregando } = useAuth();

  if (carregando) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  //não logado
  if (!user) {
    return <Redirect href="/login" />;
  }

  //ta logado
   return (
    <OrdersProvider>
      <CartProvider>
        <Stack screenOptions={{ 
          headerShown: false,
          contentStyle: {
          backgroundColor: colors.backgroundScreen,
      }, 
          }}>
          <Stack.Screen name="(tabs)"/>
          <Stack.Screen name="delivery"/>
          <Stack.Screen name="itemDetail"/>
        </Stack>
      </CartProvider>
    </OrdersProvider>
  );
}