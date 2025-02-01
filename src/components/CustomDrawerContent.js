import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CustomDrawerContent = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button title="Home" onPress={() => navigation.navigate('Home')} />
            <Button title="About" onPress={() => navigation.navigate('About')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default CustomDrawerContent;
