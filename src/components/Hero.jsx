import React from "react";
import Constants from 'expo-constants';
import { Alert, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Text, View } from "react-native";

const Hero = () =>{
    return(
        <View style={styles.container}>
                <Text>Header de mi primera aplicacion </Text>
        </View>
    )
}
export default Hero

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:Constants.statusBarHeight,
        position: 'absolute',
        top:0,


    }
})