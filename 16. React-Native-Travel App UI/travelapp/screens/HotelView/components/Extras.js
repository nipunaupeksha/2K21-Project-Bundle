import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {gs, colors} from '../../../styles'


export default function Extras() {
    const extras = [
        "Payment at Checkout",
        "Wi-Fi Network is off by 12.00pm",
        "No swimming after 10.00pm",
        "No more than 2 bags of luggage",
        "No singing while showering",
        "No refunds"

    ];
    return (
        <View style={[styles.container, gs.sectionContainer]}>
            <Text style={gs.sectionTitle}>Before you go</Text>
            <View style={styles.list}>
                {extras.map((extra,key)=>{
                    return <Text style={styles.listItem} key={key}>&ndash;{extra}</Text>
                })}
            </View>
            <View style={{marginTop:32, marginBottom:-30}}>
                <TouchableOpacity style={[gs.button,styles.filterButton]}>
                    <Text style={{fontWeight:"700", color:"#fff"}}>Filter</Text>
                </TouchableOpacity>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container:{
        marginTop: 8,
        marginBottom: 64
    },
    list:{
        marginTop:16,
        marginBottom:8
    },
    listItem:{
        color:colors.textSec,
        marginVertical:8
    },
    filterButton:{

    }
});
