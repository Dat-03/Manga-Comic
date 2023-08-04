// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Image } from 'react-native';
// import HomeScreen from './HomeScreen';
// import ProfileScreen from './ProfileScreen';

// const Tab = createBottomTabNavigator();

// const BottomTabNavigator: React.FC = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarIcon: ({ focused }) => {
//           let imageName;
//           if (route.name === 'Home') {
//             imageName = focused ? require('../src/Image/BottomTab_icon/home_active.png') : require('../src/Image/BottomTab_icon/home_inactive.png');
//           } else if (route.name === 'Social') {
//             imageName = focused ? require('../src/Image/BottomTab_icon/Social_active.png') : require('../src/Image/BottomTab_icon/Social_inactive.png');
//           } else if (route.name === 'Favorite') {
//             imageName = focused ? require('../src/Image/BottomTab_icon/Favorite_active.png') : require('../src/Image/BottomTab_icon/Favorite_inactive.png');
//           } else if (route.name === 'Account') {
//             imageName = focused ? require('../src/Image/BottomTab_icon/Account_active.png') : require('../src/Image/BottomTab_icon/Account_inactive.png');
//           }

//           return <Image source={imageName} style={{ width: 24, height: 24 }} />;
//         },
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Social" component={HomeScreen} />
//       <Tab.Screen name="Favorite" component={HomeScreen} />
//       <Tab.Screen name="Account" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// };

// export default BottomTabNavigator;
