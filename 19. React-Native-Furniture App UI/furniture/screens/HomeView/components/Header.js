import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../../../styles';

export default function Header() {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Choose your items</Text>
                <Entypo name="dots-three-vertical" size={18} color="black" style={{marginTop:10}}/>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent: 'space-between',
        lineHeight:18,
        marginTop:10,
        marginRight:10,
        marginLeft:10,
    },
    title:{
        color:colors.text,
        fontWeight:"600",
        fontSize: 24,
    }
});
