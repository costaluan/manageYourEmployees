import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Start from './src/pages/start';
import Home from './src/pages/home';
import Infos from './src/pages/Infos';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <LinearGradient
            colors={['#111017', '#090320']}
            style={{ flex: 1 }}
        >

    {/* // <Stack.Navigator>
    //     <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
    //     <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    //     <Stack.Screen name="Infos" component={Infos} options={{ headerShown: false }} />
    //   </Stack.Navigator> */}
    <NavigationContainer style={{ backgroundColor: "red" }}>
      <Tab.Navigator screenOptions={{
        tabBarStyle: {marginBottom:24, marginLeft: 24, marginRight: 24, marginTop: 1, alignContent:'center', alignItems:'center',justifyContent:'center',backgroundColor: '#201C30', borderRadius:57, padding: 24},
      }}>
        <Tab.Screen
          name="Start"
          component={Start}
          options={{
            tabBarLabel: '',
            tabBarVisible: false,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? require('./src/img/HomeSelected.png') : require('./src/img/Home.png')}
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? require('./src/img/HomeSelected.png') : require('./src/img/Home.png')}
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Infos"
          component={Infos}
          options={{
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? require('./src/img/ProfileSelected.png') : require('./src/img/Profile.png')}
                style={{ width: 24, height: 32}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </LinearGradient>
  );
}
