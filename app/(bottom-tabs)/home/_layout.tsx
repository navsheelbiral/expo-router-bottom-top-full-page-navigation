import {
    createMaterialTopTabNavigator,
    MaterialTopTabNavigationEventMap,
    MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
    MaterialTopTabNavigationOptions,
    typeof Navigator,
    TabNavigationState<ParamListBase>,
    MaterialTopTabNavigationEventMap
>(Navigator);

export default function HomeLayout() {
    return (
        <MaterialTopTabs screenOptions={{
            tabBarIndicatorStyle: { backgroundColor: 'black' }
        }}>
            <MaterialTopTabs.Screen name="following" options={{
                title: "Following"
            }} />
            <MaterialTopTabs.Screen name="forYou" options={{
                title: "For you"
            }} />
        </MaterialTopTabs>
    );
}