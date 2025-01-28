import { View, Text, StyleSheet } from 'react-native';

export default function Group() {
    return (
        <View style={styles.container}>
            <Text>Group list</Text>
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