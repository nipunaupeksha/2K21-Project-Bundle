import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {AntDesign, Entypo} from '@expo/vector-icons';
import {gs} from '../../../styles';

export default function Header(){
    return( 
        <View>
            <Image source={require('../../../assets/hotel.jpg')} style={{width:'100%', height:400}}/>
            <View style={[styles.topButtons, gs.rowBetween]}>
                <AntDesign name="close" size={24} color="#fff"/>
                <View style={gs.rowCenter}>
                    <AntDesign name="save" size={24} style={styles.topButtonsRight}/>
                    <AntDesign name="sharealt" size={24} style={styles.topButtonsRight}/>
                    <Entypo name="dots-three-vertical" size={18} style={styles.topButtonsRight}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topButtons:{
        position:'absolute',
        top:64,
        left: 32,
        right: 32
    },
    topButtonsRight:{
        marginLeft: 12,
        color:'#fff',
    }
});