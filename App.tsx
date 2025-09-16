import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import TeamsScreen from './screens/TeamsScreen';
import HistoryScreen from './screens/HistoryScreen';
import AwardsScreen from './screens/AwardsScreen';
import ContactUsScreen from './screens/ContactUsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#000' },
          tabBarActiveTintColor: '#F4C914',
          tabBarInactiveTintColor: '#fff',
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
            tabBarLabel: '',
          }}
        />
        <Tab.Screen
          name="About Us"
          component={AboutUsScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="information-circle" color={color} size={size} />,
            tabBarLabel: '',
          }}
        />
        <Tab.Screen
          name="Teams"
          component={TeamsScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="people" color={color} size={size} />,
            tabBarLabel: '',
          }}
        />
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Awards" component={AwardsScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
      </Stack.Navigator>
      <StatusBar style="dark" backgroundColor="#F4C914" />
    </NavigationContainer>
  );
}
