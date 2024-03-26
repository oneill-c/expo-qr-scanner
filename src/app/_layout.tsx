import { Stack } from "expo-router";

const Layout: React.FC = () => (
  <Stack>
    <Stack.Screen
      name="scanner"
      options={{
        headerShown: true,
        title: "Scan a QR Code",
        headerBackTitleVisible: false,
      }}
    />
  </Stack>
);

export default Layout;
