import { ScrollView, StatusBar, View } from 'react-native';
import Welcome from './src/Screen/Welcome';
import Signup from './src/Screen/Signup';
import Favorite from './src/Screen/Favorite';
import FormUser from './src/Screen/FormUser';
import Home from './src/Screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './fileTest_chucnang/HomeScreen';
import ProfileScreen from './fileTest_chucnang/ProfileScreen';
import Account from './src/Screen/Account';
import Favorite_2 from './src/Screen/Favorite_2';
import Social from './src/Screen/Social';
import { HomeStack, HomeStackNavigator } from './src/Navigation/HomeStack';
import DialogTest from './fileTest_chucnang/DialogTest';
import Button from '@mui/material/Button';
import { useState } from 'react';
import ButtonChange from './fileTest_chucnang/ButtonChange';








const App: React.FC = () => {

  return (
    <NavigationContainer>

      <HomeStack />
      <StatusBar backgroundColor="#ffffff" barStyle="light-content" />
    </NavigationContainer>
  );
};

export default App;

// export default function App() {
//   return (
//     <>
//       <ButtonChange/>
//     </>
//   );
// } 