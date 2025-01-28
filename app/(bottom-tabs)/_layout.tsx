import { Tabs } from "expo-router";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function BottomTabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'black',
                headerTitleAlign: 'center'
            }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="messages"
                options={{
                    title: 'Messages',
                    tabBarIcon: ({ color }) => <FontAwesome size={25} name="envelope-open" color={color} />,
                }}
            />
        </Tabs>
    );
}
