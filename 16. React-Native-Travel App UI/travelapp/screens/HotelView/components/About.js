import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {gs, colors} from '../../../styles';

const hotel = {
    name:'Mt. Catlin Hotel',
    price: '$967',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla porttitor massa id neque. Sed vulputate odio ut enim blandit volutpat maecenas. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Cursus in hac habitasse platea dictumst. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Arcu ac tortor dignissim convallis aenean et tortor. Id porta nibh venenatis cras sed felis eget velit aliquet. Euismod nisi porta lorem mollis aliquam ut porttitor. Bibendum enim facilisis gravida neque convallis a cras. Purus gravida quis blandit turpis cursus in hac habitasse platea.',

};

export default function About() {
    return (
        <View style={[styles.container, gs.sectionContainer]}>
            <Text style={gs.title}>{hotel.name}</Text>
            <Text style={styles.info}>{hotel.price} &#8226; {hotel.location}</Text>
            <View style={gs.divider}/>
            <Text style={gs.sectionTitle}>About {hotel.name}</Text>
            <Text style={styles.about}>{hotel.about}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.darkBg
    },
    info:{
        color:colors.textSec,
        fontWeight:'600',
        marginTop: 4
    },
    about:{
        fontSize:13,
        fontWeight:'600',
        color:colors.textSec,
        marginTop:6,
        lineHeight:20
    }
});

