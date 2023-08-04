import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ButtonChange: React.FC = () => {
  const [buttonStates, setButtonStates] = useState<boolean[]>([true, false, false, false, false]);
  const [textColor, setTextColor] = useState<string>('white');
  const handlePress = (index: number) => {
    const newButtonStates = buttonStates.map((state, i) => (i === index ? !state : state));
    setButtonStates(newButtonStates);
    setTextColor(buttonStates ? 'white' : 'red');
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.ViewScrollView}>
          {buttonStates.map((isPressed, index) => (
            <TouchableOpacity key={index} onPress={() => handlePress(index)} activeOpacity={0.7}>
              <LinearGradient
                colors={isPressed ? ['#A2B2FC', '#FFF1BE'] : ['#FFFFFF', '#FFFFFF']}
                style={styles.button}
              >
                <Text style={[styles.buttonText,{color:textColor}]}>Press me!</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ButtonChange;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  button: {
    width: 90,
    height: 30,
    borderRadius: 99,
    justifyContent: 'center',
    borderWidth: 1,
    marginStart: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
  },
  ViewScrollView: {
    flexDirection: 'row', // This will make the ScrollView
  },
});
