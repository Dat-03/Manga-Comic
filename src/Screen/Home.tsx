import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { MainStackScreenProps } from '../Navigation/Navigate';


const Home: React.FC<MainStackScreenProps<"Home">> = ({ navigation, route }) => {
    const [text, setText] = useState('');

    const handleTextChange = (inputText: string) => {
        if (inputText.length <= 250) {
            setText(inputText);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.viewavata}>
                <Image style={{ width: 80, height: 80, borderRadius: 50 }} source={require('../Image/Home_icon/avata.jpg')}></Image>
                <TouchableOpacity style={styles.btnPlus}>
                    <LinearGradient colors={['#A2B2FC', '#FFF1BE']} style={{ width: 25, height: 25, borderRadius: 20, alignItems: 'center', justifyContent: 'center', borderBottomColor: '#ffffff', borderWidth: 0.15 }}>
                        <Text style={{ color: '#ffffff' }}>3</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={styles.viewtxtheader}>
                    <View style={{ marginStart: 15 }}>
                        <Text style={styles.txtheader1}>Stay Trending!</Text>
                        <Text style={styles.txtheader2}>Drake Ho</Text>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                        <Image  source={require('../Image/Home_icon/Menu.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ alignItems: 'center', paddingTop: 24 }}>
                <View style={styles.viewSearch}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../Image/Home_icon/icon_search.png')}></Image>
                        <TextInput
                            style={styles.textInput}
                            multiline
                            value={text}
                            onChangeText={handleTextChange}
                            placeholder='Search ...........'>

                        </TextInput>
                    </View>
                    <TouchableOpacity>
                        <Image source={require('../Image/Home_icon/icon_phanloai.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
            
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                <View style={styles.ViewScrollView}>
                    <TouchableOpacity style={styles.btn_menu}>
                        <Text style={styles.txtbtntop}>All</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                <View style={styles.ViewScrollView}>
                    <TouchableOpacity style={styles.btnAnime}>
                        <Image style={styles.imageAnime}
                            source={require('../Image/Home_icon/image_anime1.png')}></Image>
                        <Text numberOfLines={1} ellipsizeMode="tail"
                            style={styles.txtNameAnime}>Re-Zero season 3</Text>
                        <Text numberOfLines={1} ellipsizeMode="tail"
                            style={styles.txtCreateAnime}>From MangaPoisk</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnAnime1}>
                        <Image style={styles.imageAnime}
                            source={require('../Image/Home_icon/image_anime2.png')}></Image>
                        <Text numberOfLines={1} ellipsizeMode="tail"
                            style={styles.txtNameAnime}>Evangalion</Text>
                        <Text numberOfLines={1} ellipsizeMode="tail"
                            style={styles.txtCreateAnime}>From MangaLib</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnAnime1}>
                        <Image style={styles.imageAnime}
                            source={require('../Image/Home_icon/image_anime2.png')}></Image>
                        <Text numberOfLines={1} ellipsizeMode="tail"
                            style={styles.txtNameAnime}>Evangalion</Text>
                        <Text numberOfLines={1} ellipsizeMode="tail"
                            style={styles.txtCreateAnime}>From MangaLib</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnAnime1}>
                        <Image style={styles.imageAnime}
                            source={require('../Image/Home_icon/image_anime2.png')}></Image>
                        <Text numberOfLines={1} ellipsizeMode="tail"
                            style={styles.txtNameAnime}>Evangalion</Text>
                        <Text numberOfLines={1} ellipsizeMode="tail"
                            style={styles.txtCreateAnime}>From MangaLib</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={styles.viewLinear}>
                <LinearGradient colors={['#A2B2FC', '#FFF1BE']} style={{ width: 400, height: 450, borderRadius: 30, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 24 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ffffff' }}>Top Reader</Text>
                        <TouchableOpacity>
                            <Image style={{ width: 50, height: 50, }} source={require('../Image/Home_icon/icon_bachamWhite.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal>
                        <View style={styles.ViewScrollView2}>
                            <TouchableOpacity>
                                <Image style={styles.imageAvata} source={require('../Image/Home_icon/avata.jpg')}></Image>
                                <Text style={styles.txtNameUser}>Peter_Ho</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginStart: 20 }}>
                                <Image style={styles.imageAvata} source={require('../Image/Home_icon/avata.jpg')}></Image>
                                <Text style={styles.txtNameUser}>Peter_Ho</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginStart: 20 }}>
                                <Image style={styles.imageAvata} source={require('../Image/Home_icon/avata.jpg')}></Image>
                                <Text style={styles.txtNameUser}>Peter_Ho</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginStart: 20 }}>
                                <Image style={styles.imageAvata} source={require('../Image/Home_icon/avata.jpg')}></Image>
                                <Text style={styles.txtNameUser}>Peter_Ho</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginStart: 20 }}>
                                <Image style={styles.imageAvata} source={require('../Image/Home_icon/avata.jpg')}></Image>
                                <Text style={styles.txtNameUser}>Peter_Ho</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginStart: 20 }}>
                                <Image style={styles.imageAvata} source={require('../Image/Home_icon/avata.jpg')}></Image>
                                <Text style={styles.txtNameUser}>Peter_Ho</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </LinearGradient>

            </View>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    viewavata: {
        flexDirection: 'row',
        paddingHorizontal: 33,
    },
    btnPlus: {
        position: 'absolute',
        left: 90,

    },
    viewtxtheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 270,
        alignItems: 'center',
    },
    viewSearch: {
        width: 320,
        height: 45,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 0.1,
        borderColor: "#333333",
        paddingHorizontal: 20

    },
    txtheader1: {
        fontSize: 12,
        fontWeight: '400',
        color: "#9D9D9D",
    },
    txtheader2: {
        fontSize: 16,
        fontWeight: '400',
        color: "#424242",
    },
    textInput: {
        width: 250,
        fontSize: 16,
        lineHeight: 24,
        paddingHorizontal: 10,
    },
    viewTextheader2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 35,

    },
    btnAnime: {
        width: 120,

    },
    txtNameAnime: {
        fontSize: 18,
        fontWeight: '400',
        color: "#424242",
        marginStart: 5,
    },
    txtCreateAnime: {
        fontSize: 12,
        fontWeight: '400',
        marginStart: 5,
        color: "#9D9D9D",
    },
    imageAnime: {
        width: 120,
        height: 150,
        borderRadius: 15
    },
    ViewScrollView: {
        flexDirection: 'row', // This will make the ScrollView
        paddingHorizontal: 25,
    },
    btnAnime1: {
        marginStart: 20,
        width: 120,
    },
    viewLinear: {
        paddingBottom: 290,
        flex: 1,
    },
    imageAvata: {
        width: 70,
        height: 70,
        borderRadius: 99,
        borderWidth: 3,
        borderColor: '#ffffff',
    },
    ViewScrollView2: {
        flexDirection: 'row', // This will make the ScrollView
        paddingHorizontal: 15,
    },
    txtNameUser: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 10,
        color: '#ffffff',
    },
    btn_menu:{
        width: 90,
        height:30,
        backgroundColor: 'red',
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
    },
    txtbtntop:{
        
    }

})