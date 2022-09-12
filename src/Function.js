//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
// create a component
const Function = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Function</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={{ color: 'white' }}>Login</Text>
            </TouchableOpacity>
        </SafeAreaView>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    button: {

        backgroundColor: "#00cfea",
        padding: 10,
        margin: 10,
        borderRadius: 10,
    }
});

//make this component available to the app
export default Function;
