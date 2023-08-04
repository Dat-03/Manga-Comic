import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { MainStackScreenProps } from '../Navigation/Navigate';


const Signup: React.FC<MainStackScreenProps<"Signup">> = ({ navigation, route }) => {
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
            <View style={styles.viewLinear}>
                <LinearGradient colors={['#FFF1BE', '#A2B2FC']} style={{ width: 400, height: 450, borderRadius: 30, }}>
                    <View style={styles.viewtxtInput}>
                        <TextInput style={{ borderBottomColor: '#ffffff', borderBottomWidth: 1, width: 250 }} placeholder='Login' placeholderTextColor="#ffffff"></TextInput>
                        <TextInput style={{ borderBottomColor: '#ffffff', borderBottomWidth: 1, width: 250 }} placeholder='Password' placeholderTextColor="#ffffff"></TextInput>
                        <TextInput style={{ borderBottomColor: '#ffffff', borderBottomWidth: 1, width: 250 }} placeholder='Compelete Password' placeholderTextColor="#ffffff"></TextInput>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                            <Text style={{ color: '#ffffff', fontSize: 16 }}>Have account? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                                <Text style={{ color: '#ffffff', fontSize: 16 }}>Sign in!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ paddingTop: 60, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}
                        style={styles.btnContinue}>
                            <Text style={styles.txtContinue}>Continue</Text>
                        </TouchableOpacity>
                    </View>


                </LinearGradient>
            </View>

        </View>
    )
}

export default Signup

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
        fontWeight: '500',
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
    },
    viewtxtSigup: {
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    txtSigup: {
        color: '#2079FF',
    },
    viewbtn: {
        alignItems: 'center',
    },
    viewLinear: {
        paddingTop: 60,
        flex: 1,
    },
    viewtxtInput: {
        paddingHorizontal: 65,
        paddingTop: 20,
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

    }
})