import { View, Text, StyleSheet } from 'react-native';

export default function Direct() {
    return (
        <View style={styles.container}>
            <Text>Direct Messages</Text>
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