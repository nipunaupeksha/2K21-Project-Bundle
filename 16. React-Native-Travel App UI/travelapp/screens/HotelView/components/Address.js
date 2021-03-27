 import React from 'react'
 import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
 import {Entypo, Feather} from '@expo/vector-icons';
 import {gs, colors} from '../../../styles';

 export default function Address() {
     return (
         <View>
             <View style={{backgroundColor:"#000"}}>
                <Image source={require('../../../assets/map.png')} style={{height:200, opacity: 0.2}}/>
             </View>
            <View style={[styles.addressContainer,gs.absoluteFull]}>
                <Feather name='map-pin' size={25} color='red'/>
                <View style={{marginLeft:8, maeginTop:24}}>
                    <Text style={gs.sectionTitle}>Address</Text>
                    <Text style={[gs.smallText,styles.address]}>
                     {`1529 Taylor Street, New York\n10011, United States.`}
                    </Text>
                    <View style={{marginTop:16}}>
                        <TouchableOpacity style={[styles.checkButton, gs.button]}>
                            <Text style={gs.smallText}>Check It</Text>
                            <Entypo name="chevron-right" size={12} color='#fff' style={{marginLeft:4}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
         </View>
         
     )
 }

 const styles = StyleSheet.create({
     addressContainer:{
         flexDirection:'row',
         paddingHorizontal:32,
         paddingVertical:16
     },
     address:{
        color:colors.darkHl,
        marginTop:6,
        letterSpacing:1,
        lineHeight:20
     },
     checkButton:{
         paddingVertical:8,
         paddingHorizontal:16,
         alignSelf:'flex-start',
         flexDirection:'row'
     }
 });
 