import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainStackScreenProps } from '../Navigation/Navigate';


const Social: React.FC<MainStackScreenProps<"Social">> = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', paddingVertical: 100, }}>
                <Text style={{ fontSize: 50, color: '#000000', fontWeight: 'bold' }}>Social</Text>
            </View>
        </View>
    )
}

export default Social

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    }
})