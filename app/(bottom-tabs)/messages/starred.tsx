import { View, Text, StyleSheet } from 'react-native';

export default function Starred() {
    return (
        <View style={styles.container}>
            <Text>Starred Messages</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});