import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { MainStackParamList } from '../Navigation/Navigate';
import Welcome from '../Screen/Welcome';
import Signup from '../Screen/Signup';
import FormUser from '../Screen/FormUser';
import Favorite from '../Screen/Favorite';
import Home from '../Screen/Home';
import Social from '../Screen/Social';
import Favorite_2 from '../Screen/Favorite_2';
import Account from '../Screen/Account';
import HomeScreen from '../../fileTest_chucnang/HomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<MainStackParamList>();

const HomeStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="FormUser" component={FormUser} />
    <Stack.Screen name="Favorite" component={Favorite} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="HomeStack" component={HomeStackNavigator} // BottomTab
    /> 
  </Stack.Navigator>
);


const HomeStackNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let imageName;
          if (route.name === 'Home') {
            imageName = focused ? require('../Image/BottomTab_icon/home_active.png') : require('../Image/BottomTab_icon/home_inactive.png');
          } else if (route.name === 'Social') {
            imageName = focused ? require('../Image/BottomTab_icon/Social_active.png') : require('../Image/BottomTab_icon/Social_inactive.png');
          } else if (route.name === 'Favorite_2') {
            imageName = focused ? require('../Image/BottomTab_icon/Favorite_active.png') : require('../Image/BottomTab_icon/Favorite_inactive.png');
          } else if (route.name === 'Account') {
            imageName = focused ? require('../Image/BottomTab_icon/Account_active.png') : require('../Image/BottomTab_icon/Account_inactive.png');
          }

          return <Image source={imageName} style={{ width: 24, height: 24 }} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Social" component={Social} />
      <Tab.Screen name="Favorite_2" component={Favorite_2} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  )
}

export { HomeStack, HomeStackNavigator };
