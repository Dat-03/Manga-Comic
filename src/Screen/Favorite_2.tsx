import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainStackScreenProps } from '../Navigation/Navigate';


const Favorite_2: React.FC<MainStackScreenProps<"Favorite_2">> = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', paddingVertical: 100, }}>
        <Text style={{ fontSize: 50, color: '#000000', fontWeight: 'bold' }}>Favorite</Text>
      </View>
    </View>
  )
}

export default Favorite_2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  }
})