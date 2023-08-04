import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { MainStackScreenProps } from '../Navigation/Navigate';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


const FormUser: React.FC<MainStackScreenProps<"FormUser">> = ({ navigation, route }) => {

    const [selectImage, setselectImage] = useState('https://i.pinimg.com/564x/b2/04/26/b204266e1975508a8c5c97e94d9891d4.jpg')
    const imagepicker = () => {
        let options = {
            storageOptions: {
                path: 'images',
            }
        }
        // @ts-ignore
        launchImageLibrary(options, response => {
            // @ts-ignore
            setselectImage(response.assets[0].uri)
            // @ts-ignore
            console.log(response.assets[0].uri);
        })
    }
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', paddingTop: 29, flexDirection: 'row', justifyContent: 'center' }}>
                <View style={styles.viewImage}>
                    <Image style={{ height: 100, width: 100, borderRadius: 99 }} source={{ uri: selectImage }}></Image>
                </View>
                <TouchableOpacity onPress={() => { imagepicker(); }}
                    style={styles.btnPlus}>
                    <LinearGradient colors={['#A2B2FC', '#FFF1BE']} style={{ width: 30, height: 30, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ width: 16, height: 17 }} source={require('../Image/linktink/plus.png')}></Image>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={styles.viewtxtInput}>
                <TextInput style={styles.txtInput} placeholder='Enter your name'></TextInput>
                <TextInput style={styles.txtInput1} placeholder='Enter your nickname'></TextInput>
                <TextInput style={styles.txtInput1} placeholder='Write your email'></TextInput>
                <TextInput style={styles.txtInput1} placeholder='Make a password'></TextInput>
                <TextInput style={styles.txtInput1} placeholder='Confirm password'></TextInput>
            </View>
            <View style={{ paddingTop: 60, alignItems: 'center' }}>

                <LinearGradient colors={['#FFF1BE', '#A2B2FC']} style={styles.btnContinue}>
                    <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
                        <Text style={styles.txtContinue}>Continue</Text>
                    </TouchableOpacity>
                </LinearGradient>


            </View>

        </View>
    )
}

export default FormUser

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    viewImage: {
        width: 100,
        height: 100,
        backgroundColor: '#9D9D9D',
        borderRadius: 50,

    },
    btnPlus: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: 90,
        right: 138
    },
    viewtxtInput: {
        padding: 65
    },
    txtInput: {
        borderBottomWidth: 1
    },
    txtContinue: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16

    },
    txtInput1: {
        borderBottomWidth: 1,
        paddingTop: 30
    },
    btnContinue: {
        width: 280,
        height: 43,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
})