import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal, Image } from 'react-native';
import { CameraView, useCameraPermissions, Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';

export default function CameraScreen() {
    const camRef = useRef(null);
    const [type, setType] = useState('back');
    const [hasPermission, setHaspermission] = useCameraPermissions(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHaspermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <Text> Access nagetive! </Text>;
    }

    async function takepicture(){
        if(camRef){
            const data = await camRef.current.takePictureAsync();
            setCapturedPhoto(data.uri);
            setOpen(true);
            console.log(data);
        }
    }

    return (
        <SafeAreaView style={styles.container} >
            <CameraView
                style={{ flex: 1 }}
                facing={type}
                ref={camRef}
            >
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        bottom: 20,
                        left: 20,
                    }}
                    onPress={() => {
                        setType(
                            type === 'back'
                                ? 'front'
                                : 'back'
                        );
                    }}
                >
                    <Text style={{ fontSize: 20, marginBottom: 13, color: '#FFF' }}>transform</Text>
                </TouchableOpacity>
            </CameraView>

            <TouchableOpacity style={styles.button} onPress={ takepicture }>
                <FontAwesome name='camera' size={23} color="#FFF" />
            </TouchableOpacity>

            { capturedPhoto &&
                <Modal
                animationType='slide'
                transparent={false}
                visible={open}
                >
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20}}>

                        <TouchableOpacity style={{margin: 10}} onPress={() => setOpen(false)}>
                            <FontAwesome name='window-close' size={50} color="#FF0000" />
                        </TouchableOpacity>

                        <Image
                            style={{ width: '100%', height: 300, borderRadius: 20}}
                            source={{ uri: capturedPhoto }}
                        />

                    </View>
                </Modal>
            }


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        margin: 20,
        borderRadius: 10,
        height: 50,
    },
});