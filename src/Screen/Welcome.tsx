import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { MainStackScreenProps } from '../Navigation/Navigate';
import Signup from './Signup';




const Welcome: React.FC<MainStackScreenProps<"Welcome">> = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textWelcome}>Welcome</Text>
                <Text style={styles.texta}>Sign in to start</Text>
            </View>
            <View style={styles.viewbtn}>
                <View style={styles.viewbtnGoogle}>
                    <TouchableOpacity style={styles.btnGoogle}>
                        <Image source={require('../Image/linktink/google.png')}></Image>
                        <Text style={styles.txtGoogle}>Continue with Google</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewbtnMeta}>
                    <TouchableOpacity style={styles.btnMeta}>
                        <Image source={require('../Image/linktink/meta.png')}></Image>
                        <Text style={styles.txtMeta}>Continue with Meta</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.viewtxtSigup}>
                <Text style={{ color: '#424242',fontSize:16 }}>Haven`t account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.txtSigup}>Sign up!</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewLinear}>
                <LinearGradient colors={['#FFF1BE', '#A2B2FC']} style={{ width: 390, height: 395, borderRadius: 30 }}>
                    <View style={styles.viewtxtInput}>
                        <TextInput style={{ borderBottomColor: '#ffffff', borderBottomWidth: 1, width: 270 }} placeholder='Login' placeholderTextColor="#ffffff"></TextInput>
                        <TextInput style={{ borderBottomColor: '#ffffff', borderBottomWidth: 1, width: 270 }} placeholder='Password' placeholderTextColor="#ffffff"></TextInput>
                        <TouchableOpacity>
                            <Text style={{ left: 160, marginTop: 10, color: '#ffffff',fontWeight:'bold',fontSize:14 }}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingTop: 60, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Favorite')}
                            style={styles.btnContinue}>
                            <Text style={styles.txtContinue}>Continue</Text>
                        </TouchableOpacity>
                    </View>


                </LinearGradient>
            </View>

        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',

        flex: 1,
    },
    header: {
        alignItems: 'center',
        paddingTop: 56,
    },
    textWelcome: {
        fontSize: 36,
        fontWeight: 'bold',
        color: "#424242",
    },
    texta: {
        fontSize: 16,
        fontWeight: '500',
    },
    btnGoogle: {
        paddingHorizontal: 20,
        width: 280,
        height: 43,
        backgroundColor: '#ffffff',
        borderRadius: 99,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 0.1,
    },
    txtGoogle: {
        color: '#424242',
        paddingHorizontal: 40,
        fontSize:14
    },
    viewbtnGoogle: {
        paddingTop: 60,
    },
    viewbtnMeta: {
        paddingTop: 40,
    },
    btnMeta: {
        paddingHorizontal: 20,
        width: 280,
        height: 43,
        backgroundColor: '#2079FF',
        borderRadius: 99,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 0.1,
    },
    txtMeta: {
        color: '#ffffff',
        paddingHorizontal: 45,
        fontSize:14,
    },
    viewtxtSigup: {
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    txtSigup: {
        color: '#2079FF',
        fontSize:16
    },
    viewbtn: {
        alignItems: 'center',
    },
    viewLinear: {
        paddingTop: 60,

    },
    viewtxtInput: {
        paddingHorizontal: 65,
        paddingTop: 59,
    },
    btnContinue: {
        width: 280,
        height: 43,
        backgroundColor: '#9D9D9D',
        borderRadius: 99,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtContinue: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    }
})