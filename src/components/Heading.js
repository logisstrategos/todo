import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Heading = () => {
    return (
        <View>
            <Text style={styles.headerText}>
                My Todo List
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 80
    },
    headerText: {
        textAlign: 'center',
        fontSize: 50,
        //color: 'rgba(175, 47, 47, 0.25)',
        fontWeight: '100'
    }
})

export default Heading