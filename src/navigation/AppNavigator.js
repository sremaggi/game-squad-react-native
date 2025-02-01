import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Importa Ionicons de Expo

import { ThemeContext } from '../contexts/ThemeContext';

// SCREENS
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';
import MyClubsScreen from '../screens/MyClubsScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { theme } = useContext(ThemeContext); // Obtener el tema actual

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return <Ionicons name="home-outline" size={size} color={color} />;  // Ícono de Home
          } else if (route.name === 'User') {
            return <Ionicons name="person-outline" size={size} color={color} />; // Ícono de Usuario
          } else if (route.name === 'My Clubs') {
            return <Ionicons name="football" size={size} color={color} />;  // Ícono de Estrella
          }
        },
        tabBarActiveTintColor: theme === 'light' ? 'tomato' : 'white', // Color activo
        tabBarInactiveTintColor: theme === 'light' ? 'gray' : 'gray', // Color inactivo
        tabBarStyle: {
          backgroundColor: theme === 'light' ? '#ffffff' : '#000000', // Fondo de la navbar
        },
        headerStyle: {
          backgroundColor: theme === 'light' ? '#ffffff' : '#000000', // Fondo del header
        },
        headerTintColor: theme === 'light' ? '#000000' : '#ffffff', // Color del texto del header
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="User" component={UserScreen} />
      <Tab.Screen name="My Clubs" component={MyClubsScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
