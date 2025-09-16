import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/HomeScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import TeamsScreen from './screens/TeamsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#000' },
          tabBarActiveTintColor: '#F4C914',
          tabBarInactiveTintColor: '#fff',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About Us" component={AboutUsScreen} />
        <Tab.Screen name="Teams" component={TeamsScreen} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
