import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CustomHeader = ({ title, navigation }) => {
    return (
        <View style={styles.headerContainer}>
            {/* Logo */}
            <Image
                source={require('../assets/logo.png')} // Cambia la ruta según tu logo
                style={styles.logo}
            />

            {/* Título dinámico */}
            <Text style={styles.title}>{title}</Text>

            {/* Botón de usuario */}
            <TouchableOpacity
                onPress={() => navigation.navigate('User')}
                style={styles.userButton}
            >
                <Text style={styles.userText}>User</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
        paddingHorizontal: 15

    },
    logo: {
        width: 40,
        height: 40,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    userButton: {
        padding: 8,
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
    userText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default CustomHeader;
