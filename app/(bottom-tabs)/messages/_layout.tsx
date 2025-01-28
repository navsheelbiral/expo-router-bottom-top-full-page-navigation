import {
    createMaterialTopTabNavigator,
    MaterialTopTabNavigationEventMap,
    MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";


const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
    MaterialTopTabNavigationOptions,
    typeof Navigator,
    TabNavigationState<ParamListBase>,
    MaterialTopTabNavigationEventMap
>(Navigator);

export default function MessagesLayout() {
    return (
        <MaterialTopTabs screenOptions={{
            tabBarIndicatorStyle: { backgroundColor: 'black' },
            tabBarShowLabel: false
        }}>
            <MaterialTopTabs.Screen name="direct" options={{
                tabBarIcon: () => <FontAwesome name="user" size={20} />,
            }} />
            <MaterialTopTabs.Screen name="group" options={{
                tabBarIcon: () => <FontAwesome name="users" size={20} />,
            }}  />
            <MaterialTopTabs.Screen name="starred" options={{
                tabBarIcon: () => <FontAwesome name="star" size={20} />,
            }}  />
        </MaterialTopTabs>
    );
}