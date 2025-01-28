import {View, Text, StyleSheet, Pressable} from 'react-native';
import {router} from "expo-router";

export default function Following() {
    const onPressButton = () => {
        router.navigate('/fullScreenRoute');
    }
    return (
        <View style={styles.container}>
            <Text>Posts by people you are following</Text>
            <Pressable style={styles.button} onPress={onPressButton}>
                <Text style={styles.text}>Full screen route</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 22,
        borderRadius: 12,
        backgroundColor: 'black',
        marginTop: 10,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        color: 'white',
    },
});