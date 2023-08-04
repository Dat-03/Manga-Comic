import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainStackScreenProps } from '../Navigation/Navigate';


const Account: React.FC<MainStackScreenProps<"Account">> = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', paddingVertical: 100, }}>
        <Text style={{ fontSize: 50, color: '#000000', fontWeight: 'bold' }}>ACcount</Text>
      </View>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  }
})