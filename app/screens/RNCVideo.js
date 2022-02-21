import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import React, { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import { Video } from 'expo-av';

const RNCVideo = () => {
    const [hasAudioPermission, setHasAudioPermission] = useState(null);
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [record, setRecord] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.front);
    const video = React.useRef(null);
    const [status, setStatus] = useState({});

    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
            const audioStatus = await Camera.requestMicrophonePermissionsAsync();
            setHasAudioPermission(audioStatus.status === 'granted');
        })();
    }), [];

    const takeVideo = async () => {
        if (camera) {
            const data = await camera.recordAsync({ maxDuration: 10 })
            setRecord(data.uri);
            console.log(data.uri)
        }
    }
    const stopVideo = async () => {
        camera.stopRecording();
    }




    return (
        <View>
            <Text>RNCVideo</Text>
        </View>
    )
}

export default RNCVideo

const styles = StyleSheet.create({})