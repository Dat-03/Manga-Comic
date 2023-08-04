import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { MainStackScreenProps } from '../Navigation/Navigate';



const Favorite: React.FC<MainStackScreenProps<"Favorite">> = ({ navigation, route }) => {
    const [buttons, setButtons] = useState<Button[]>([
        { id: 1, color: '#fff', gradientColor: '#ffffff', text: 'Action', image: require('../Image/Favorite_icon/icon_action.png') },
        { id: 2, color: '#fff', gradientColor: '#ffffff', text: 'Romance', image: require('../Image/Favorite_icon/icon_romance.png') },
        { id: 3, color: '#fff', gradientColor: '#ffffff', text: 'Drama', image: require('../Image/Favorite_icon/icon_drama.png') },
        { id: 4, color: '#fff', gradientColor: '#ffffff', text: 'Horror', image: require('../Image/Favorite_icon/icon_horor.png') },
        { id: 5, color: '#fff', gradientColor: '#ffffff', text: 'Fantasy', image: require('../Image/Favorite_icon/icon_fantasy.png') },
        { id: 6, color: '#fff', gradientColor: '#ffffff', text: 'Mistery', image: require('../Image/Favorite_icon/icon_mistery.png') },
        { id: 7, color: '#fff', gradientColor: '#ffffff', text: 'Magic', image: require('../Image/Favorite_icon/icon_magic.png') },
        { id: 8, color: '#fff', gradientColor: '#ffffff', text: 'Comedy', image: require('../Image/Favorite_icon/icon_comedy.png') },
        { id: 9, color: '#fff', gradientColor: '#ffffff', text: 'Daily Life', image: require('../Image/Favorite_icon/icon_dailylife.png') },
        { id: 10, color: '#fff', gradientColor: '#ffffff', text: 'Psychology', image: require('../Image/Favorite_icon/icon_psychology.png') },
        { id: 11, color: '#fff', gradientColor: '#ffffff', text: 'Adventure', image: require('../Image/Favorite_icon/icon_adventure.png') },
        { id: 12, color: '#fff', gradientColor: '#ffffff', text: 'Thriller', image: require('../Image/Favorite_icon/icon_thriller.png') },
        // Thêm nút
    ]);
    const handlePress = (buttonId: number) => {
        setButtons((prevButtons) =>
            prevButtons.map((button) =>
                button.id === buttonId
                    //FFF1BE vàng, A2B2FC xanh
                    ? {
                        ...button,
                        color: button.color === '#A2B2FC' ? '#ffffff' : '#A2B2FC',
                        gradientColor: button.gradientColor === '#ffffff' ? 'red' : '#ffffff', // chỉnh màu nút ở đây
                        textColor: button.color === '#A2B2FC' ? '#000000' : '#ffffff',
                    } : button
            )
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.viewtxtHeader}>
                <Text style={styles.txtHeader}>Let Us Know!</Text>
                <Text>Choose your genre to find</Text>
                <Text>favorite titles here!</Text>
            </View>
            <View style={styles.gridContainer}>
                {buttons.map((button) => (
                    <LinearGradient colors={[button.gradientColor, '#A2B2FC']} style={[styles.button]}>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                            key={button.id}
                            onPress={() => handlePress(button.id)}>
                            <Image source={button.image} style={styles.buttonImage} />
                            <Text style={[styles.buttonText, { color: button.textColor }]}>{button.text}</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                ))}
            </View>
            <View style={{ paddingTop: 40, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('FormUser')}
                    style={styles.btnContinue}>
                    <Text style={styles.txtContinue}>Continue</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}
                style={{ alignItems: 'center', paddingTop: 10 }}>
                <Text style={styles.txtskip}>Skip for now</Text>
            </TouchableOpacity>
        </View>
    )
}
interface Button {
    id: number;
    color: string;
    gradientColor: string;
    text: string;
    image: any;
    textColor?: string;
}
export default Favorite

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    txtHeader: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#9D9D9D'
    },
    viewtxtHeader: {
        alignItems: 'center',
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 100,
        height: 100,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.4,
        marginTop: 20,
        marginStart: 15,


    },
    buttonImage: {
        width: 50,
        height: 50,
        marginBottom: 10,

    },
    buttonText: {
        fontWeight: 'bold',

    },
    txtContinue: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    txtskip: {
        fontSize: 16,
        fontWeight: '400',
        color: '#9D9D9D'
    },
    btnContinue: {
        width: 280,
        height: 43,
        backgroundColor: '#A2B2FC',
        borderRadius: 99,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
})