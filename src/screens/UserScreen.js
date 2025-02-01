import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';


export default function UserScreen({ navigation }) {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
            }}
        >
            <Text style={{ color: theme === 'light' ? '#000000' : '#ffffff' }}>
                User Screen - Modo: {theme.toUpperCase()}
            </Text>
            <Button title="Cambiar Tema" onPress={toggleTheme} />
        </View>
    );
}
