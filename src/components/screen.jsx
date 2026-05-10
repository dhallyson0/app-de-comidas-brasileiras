import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../styles/globalStyle";

export default function Screen({ children, style }) {
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          backgroundColor: colors.backgroundScreen,
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
}