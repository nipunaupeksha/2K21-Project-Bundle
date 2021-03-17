import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Feather, Ionicons, FontAwesome5, Entypo} from '@expo/vector-icons';
import {gs, colors} from '../../../styles';

export default function Amenities() {
    return (
        <View style={gs.sectionContainer}>
            <Text style={gs.sectionTitle}>Amenities</Text>
            <View style={[gs.rowBetween,styles.amenitiesContainer]}>
                <View style={styles.amenityContainer}>
                    <View style={[styles.amenity,gs.center]}>
                        <Feather name="wifi" size={24} color={colors.lightHl}/>
                    </View>
                    <Text style={styles.amenityName}>WI-FI</Text>
                </View>

                <View style={styles.amenityContainer}>
                    <View style={[styles.amenity,gs.center]}>
                        <Ionicons name="md-restaurant" size={24} color={colors.lightHl}/>
                    </View>
                    <Text style={styles.amenityName}>Hotel Restaurant</Text>
                </View>

                <View style={styles.amenityContainer}>
                    <View style={[styles.amenity,gs.center]}>
                        <FontAwesome5 name="swimmer" size={24} color={colors.lightHl}/>
                    </View>
                    <Text style={styles.amenityName}>Swimming Pool</Text>
                </View>

                <View style={styles.amenityContainer}>
                    <View style={[styles.amenity,gs.center]}>
                        <Entypo name="drink" size={24} color={colors.lightHl}/>
                    </View>
                    <Text style={styles.amenityName}>Bar</Text>
                </View>

                <View style={styles.amenityContainer}>
                    <View style={[styles.amenity,gs.center]}>
                        <Ionicons name="ios-car" size={24} color={colors.lightHl}/>
                    </View>
                    <Text style={styles.amenityName}>Parking Spot</Text>
                </View>

                <View style={styles.amenityContainer}>
                    <View style={[styles.amenity,gs.center]}>
                        <Feather name="speaker" size={24} color={colors.lightHl}/>
                    </View>
                    <Text style={styles.amenityName}>Night Club</Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{},
    amenitiesContainer:{
        marginTop: 16,
        marginHorizontal: 10,
        flexWrap: 'wrap', 
    },
    amenityContainer:{
        alignItems:'center',
        width: 95,
        marginVertical: 12
    },
    amenity:{
        width: 48,
        height: 48,
        borderRadius: 48/2,
        backgroundColor:"#444",
    },
    amenityName:{
        color:colors.lightHl,
        fontSize:12,
        fontWeight:"600",
        marginTop:6,
        textAlign:'center'
    }
});