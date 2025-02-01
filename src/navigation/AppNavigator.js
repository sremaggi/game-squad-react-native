import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgXml } from 'react-native-svg'; // Importa el componente SVG
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';

// Aquí defines tus íconos SVG
const homeIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
`;

const aboutIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
  </svg>
`;

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                        return <SvgXml xml={homeIcon} width={size} height={size} fill={color} />;
                    } else if (route.name === 'About') {
                        return <SvgXml xml={aboutIcon} width={size} height={size} fill={color} />;
                    }
                },
                tabBarActiveTintColor: 'tomato', // Color para la pestaña activa
                tabBarInactiveTintColor: 'gray', // Color para las pestañas inactivas
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
    );
};

export default AppNavigator;
