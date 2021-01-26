import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Animated, Dimensions } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

export const tabHeight = 64;
const { width } = Dimensions.get("window");

const StaticTabbar = (props) => {

    const value = props.value;
    const tabs = props.tabs;
    const tabWidth = width / tabs.length;

    const values = tabs.map((tab, index) => new Animated.Value(index === 0 ? 1 : 0))

    const onPress = (index) => {
        Animated.sequence([
            ...values.map(value => Animated.timing(value, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true
            }),
                Animated.parallel([
                    Animated.spring(values[index], {
                        toValue: 1,
                        useNativeDriver: true
                    }),
                    Animated.spring(value, {
                        toValue: -width + tabWidth * index,
                        useNativeDriver: true
                    })
                ])

            )])
            .start();
    };


    const tabGrid = tabs.map(({ name }, key) => {
        const activeValue = values[key];
        const opacity = value.interpolate({
            inputRange: [-width + tabWidth * (key - 1), -width + tabWidth * (key), -width + tabWidth * (key + 1)],
            outputRange: [1, 0, 1],
            extrapolate: 'clamp'
        });
        const translateY = activeValue.interpolate({
            inputRange: [0, 1],
            outputRange: [tabHeight, 0],
        });
        return (
            <React.Fragment {...{ key }}>
                <TouchableWithoutFeedback onPress={onPress} {...{ key }}>
                    <View style={[styles.tab, { opacity }]}>
                        <Icon size={25} {...{ name }} />
                    </View>
                </TouchableWithoutFeedback>
                <Animated.View style={{
                    position: 'absolute',
                    top: -8,
                    width: tabWidth,
                    left: tabWidth * key,
                    height: tabHeight,
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform:[{translateY}]
                }}>
                    <View style={styles.circle}>
                        <Icon size={25} {...{ name }} />
                    </View>
                </Animated.View>
            </React.Fragment>
        )
    });

    return (
        <View style={styles.container}>
            {tabGrid}
        </View>
    )
};

export default StaticTabbar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tab: {
        flex: 1,
        height: tabHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
});