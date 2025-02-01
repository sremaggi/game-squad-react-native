import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext'; // Importa el contexto

export default function MyClubsScreen() {
    const { theme } = useContext(ThemeContext); // Obtén el tema actual

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme === 'light' ? '#ffffff' : '#000000', // Fondo según el tema
            }}
        >
            <Text style={{ color: theme === 'light' ? '#000000' : '#ffffff' }}>My Teams Screen</Text>
        </View>
    );
}
