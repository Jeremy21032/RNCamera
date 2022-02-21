import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import React, { useState, useEffect, useRef } from 'react'
import { Image } from 'react-native';
import { Button } from 'react-native-elements';

export const ConfimationImage = ({ navigation, route }) => {
    let imageUri = null;
    let camerafn = null;

    if (
        route != null &&
        route.params != null &&
        route.params.imageUri != null
    ) {
        imageUri = route.params.imageUri;
    }

    if (
        route != null &&
        route.params != null &&
        route.params.camerafn != null
    ) {
        camerafn = route.params.camerafn;

    }

    console.log("Resource:", imageUri);
    console.log("CAMERA FN :", camerafn)

    return (
        <View style={styles.container}>


            <Text style={{ color: 'black' , position:'absolute', top: 200}}>¿Todos los datos son legibles? Si no es así, tómala de nuevo.</Text>

            <Image
                style={styles.image}
                source={{ uri: imageUri }} />

            <View style={styles.containerButtons}>
                <Button
                    title="Repetir foto"
                    titleStyle={styles.titleButtons}
                    buttonStyle={[styles.buttons, { backgroundColor: "black" }]}
                    onPress={() => {

                    }}
                />
                <Button
                    title="Continuar"
                    titleStyle={styles.titleButtons}
                    buttonStyle={[styles.buttons, { backgroundColor: "#00C7B1" }]}
                    onPress={() => {

                    }}
                />
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        transform: [{ rotate: '90deg' }],
        alignItems: 'center',
        left:-20,
        // backgroundColor:'red',
        

    }, image: {
        width: 250,
        height: 450,
        borderRadius: 20,
        transform: [{ rotate: '-90deg' }],

    },
    titleButtons: {
        letterSpacing: 1.25,
        fontWeight: "700",
        fontSize: 14,
        color: 'white',
    }, buttons: {
        borderRadius: 20,
        width: 150,
        marginBottom: 100,
        borderWidth: 1,
        borderColor: "transparent",
        marginLeft:20
    }, containerButtons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: -90,
    }
});