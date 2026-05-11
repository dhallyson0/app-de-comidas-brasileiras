import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../../styles/globalStyle";
import { COLORS, tabBarStyles, tabIconStyles } from "../../../styles/tabStyle";

//Ícones
const ICONS = {
  home:         require("../../../../assets/icons/home.png"),
  favorites:    require("../../../../assets/icons/heart.png"),
  shoppingCart: require("../../../../assets/icons/bag.png"),
  orders:       require("../../../../assets/icons/notification.png"),
};

//Componente de ícone com ponto ativo
function TabIcon({ source, focused }) {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={source}
        style={[
          tabIconStyles.icon,
          { tintColor: focused ? COLORS.tabActive : COLORS.tabInactive },
        ]}
      />
      {focused && <View style={tabIconStyles.activeIndicator} />}
    </View>
  );
}

//Tabs
export default function TabsLayout() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.backgroundScreen}}
      edges={["bottom"]}
    >
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          sceneStyle: {
            backgroundColor: colors.backgroundScreen,
          },
          tabBarStyle: tabBarStyles.tabBar,
          tabBarItemStyle: tabBarStyles.tabBarItem,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon source={ICONS.home} focused={focused} />
            ),
          }}
        />

        <Tabs.Screen
          name="favorites"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon source={ICONS.favorites} focused={focused} />
            ),
          }}
        />

        <Tabs.Screen
          name="shoppingCart"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon source={ICONS.shoppingCart} focused={focused} />
            ),
          }}
        />

        <Tabs.Screen
          name="orders"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon source={ICONS.orders} focused={focused} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}