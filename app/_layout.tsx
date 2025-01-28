import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(bottom-tabs)" />
            <Stack.Screen name="index" />
            <Stack.Screen name="fullScreenRoute" options={{
                headerShown: true,
                title: "Full Screen Route",
                headerBackTitleVisible: false
            }}/>
        </Stack>
    );
}