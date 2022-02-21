import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, Modal, Image } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { Camera } from 'expo-camera'
import { Button, Icon } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons';
import santander from '../../assets/santander.png'
import { ConfimationImage } from './ConfimationImage';

export const RNCamera = ({ navigation }) => {
    windowHeight = Dimensions.get('window').height;
    windowWidth = Dimensions.get('window').width
    const maskRowHeight = (windowHeight - 300) / 50;
    const maskColWidth = (windowWidth) / 2;

    const camRef = useRef(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState(false);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }), [];

    let cameraPermissions =  () => {
        setCapturedPhoto(null);
    };

    if (hasPermission === null) {
        return <View />;
    } if (hasPermission === false) {
        return <Text>Error Access Denied</Text>
    }

    async function takePicture() {
        if (camRef) {
            const data = await camRef.current.takePictureAsync();
            setCapturedPhoto(data.uri);
            console.log(data);
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Camera style={styles.camera} type={type} ref={camRef}>
                <View style={styles.viewCamera}>
                    <TouchableOpacity style={{ minHeight: windowHeight, minWidth: windowWidth, backgroundColor: "rgba(0, 0, 0, 0.33)" }}
                        onPress={() => {
                            takePicture();
                            capturedPhoto != null ? navigation.navigate("CAMERA") : <></>
                        }}>

                        {/* <TouchableOpacity style={styles.buttonCamera}
                            //Preguntar si la camara es trasera o delantera
                            onPress={() => {
                                setType(
                                    type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
                                );
                            }}>
                            <Icon style={styles.text} name='retweet' type='ant-design' color='gray' raised
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            position: 'absolute',
                            bottom: 40,
                            left: Dimensions.get('window').width / 2.2,


                        }}
                            //Pregutnar si la camara es trasera o delantera
                            onPress={() => {
                                takePicture()
                            }}>
                            <Text style={{ textAlign: 'center', }}>Coloca de frente tu identificación y toca la pantalla para tomar la foto</Text>
                        </TouchableOpacity> */}
                        <View style={styles.maskOutter}>
                            <View style={[{ flex: maskRowHeight }, styles.maskRow, styles.maskFrame]} />
                            <View style={[{ flex: 35 }, styles.maskCenter]}>
                                <View style={[{ width: maskColWidth - 40 }, styles.maskFrame]} />
                                <View style={styles.maskInner} >
                                    <Image style={{
                                        minWidth: 100, position: 'absolute', transform: [{ rotate: '90deg' }]
                                    }} source={santander} />
                                    <Text style={styles.innerText}>Coloca de frente tu identificación y toca la pantalla para tomar la foto</Text>
                                </View>
                                <View style={[{ width: maskColWidth }, styles.maskFrame]} />
                            </View>
                            <View style={[{ flex: maskRowHeight }, styles.maskRow, styles.maskFrame]} />

                        </View>
                    </TouchableOpacity>

                </View>

            </Camera>
            {capturedPhoto &&
                navigation.navigate("CONFIRMATION", { imageUri: capturedPhoto , camerafn:cameraPermissions})
            }
        </SafeAreaView>
    )
}
 


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }, camera: {
        flex: 1,
        justifyContent: 'center',
    }, viewCamera: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row'
    }, buttonCamera: {
        position: 'absolute',
        bottom: 20,
        left: 20,

    }, text: {
        fontSize: 20,
        marginBottom: 13,
        color: '#fff'
    }, capture: {
        position: 'absolute',
        bottom: 20,
        left: Dimensions.get('window').width / 2,
    }, buttonModal: {
        margin: 10
    }, image: {
        width: '100%',
        height: '50%',
        borderRadius: 20
    }, cameraView: {
        flex: 1,
        justifyContent: 'center',
    },
    maskOutter: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    maskInner: {
        width: 250,
        backgroundColor: 'transparent',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: 'center',
    },
    maskFrame: {
        backgroundColor: 'rgba(0, 0, 0, 0.33)',
    },
    maskRow: {
        width: '100%',
    },
    maskCenter: {
        flexDirection: 'row',


    }, innerText: {
        transform: [{ rotate: '90deg' }],
        fontSize: 15,
        color: 'rgba(255, 255, 255, 0.50)',
        fontFamily: 'Roboto'
    },
    innerText2: {
        transform: [{ rotate: '90deg' }],
        fontSize: 15,
        color: 'black',
        fontFamily: 'Roboto'
    }
});