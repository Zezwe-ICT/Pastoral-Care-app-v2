import React from 'react';
import { View, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';

const TestComponent = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                style={styles.plusButton}
                onPress={() => Alert.alert('Button Pressed', 'This is your floating + button!')}
            >
                <Text style={styles.plusText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    plusButton: {
        marginLeft: 350,
        marginTop: 780,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    plusText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default TestComponent;
