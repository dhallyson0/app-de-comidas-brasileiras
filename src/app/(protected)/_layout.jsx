import * as NavigationBar from "expo-navigation-bar";
import { Redirect, Stack } from "expo-router";
import { useEffect } from "react";
import { CartProvider } from "../../context/cartContext";
import { OrdersProvider } from "../../context/ordersContext";
import { colors } from "../../styles/globalStyle";

const isLogged = true;

export default function ProtectedLayoutt() {
    useEffect(() => {
    NavigationBar.setButtonStyleAsync("dark");
  }, []);

  if (!isLogged) {
    return <Redirect href="/login" />;
  }

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