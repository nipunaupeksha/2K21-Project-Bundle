import React, { Component } from 'react';
import { View, Text,Animated,TouchableWithoutFeedback,StyleSheet } from 'react-native';
import {AntDesign, Entypo} from '@expo/vector-icons';

class FloatingButton extends Component {
    animation = new Animated.Value(0);
    toggleMenu =()=>{
        const toValue = this.open ? 0:1;
        Animated.spring(this.animation,{
            toValue,
            friction:5
        }).start();

        this.open=!this.open;
    };
    render() {
    const pinStyle = {
        transform:[
            {scale:this.animation},{
                translateY:this.animation.interpolate({
                inputRange:[0,1],
                outputRange:[0,-80]
            })}
        ]
    };

    const thumbStyle = {
        transform:[
            {scale:this.animation},{
                translateY:this.animation.interpolate({
                inputRange:[0,1],
                outputRange:[0,-140]
            })}
        ]
    };

    const heartStyle = {
        transform:[
            {scale:this.animation},{
                translateY:this.animation.interpolate({
                inputRange:[0,1],
                outputRange:[0,-200]
            })}
        ]
    };
    
    const rotation = {
        transform:[
            {
                rotate:this.animation.interpolate({
                    inputRange:[0, 1],
                    outputRange:['0deg','45deg']
                })
            }
            
        ]
    };

    const opacity = this.animation.interpolate({
        inputRange:[0,0.5,1],
        outputRange:[0,0,1]
    });
    return (
      <View style={[styles.container, this.props.style]}>
          <TouchableWithoutFeedback>
            <Animated.View style={[styles.button, styles.secondary,heartStyle,opacity]}>
                <AntDesign name="hearto" size={20} color="#f02a48"/>
            </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
            <Animated.View style={[styles.button, styles.secondary,thumbStyle,opacity]}>
                <Entypo name="thumbs-up" size={20} color="#f02a48"/>
            </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
            <Animated.View style={[styles.button, styles.secondary, pinStyle,opacity]}>
                <Entypo name="location-pin" size={20} color="#f02a48"/>
            </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.toggleMenu}>
            <Animated.View style={[styles.button, styles.menu, rotation]}>
                <AntDesign name="plus" size={24} color="#fff"/>
            </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        position:'absolute'
    },
    button:{
        position:'absolute',
        width:60,
        height:60,
        borderRadius:60/2,
        alignItems:'center',
        justifyContent:'center',
        shadowRadius:10,
        shadowColor:'#f02a4b',
        shadowOpacity:0.3,
        shadowOffset:{height:10}
    },
    menu:{
        backgroundColor:'#f02a4b'
    },
    secondary:{
        width:48,
        height:48,
        borderRadius:48/2,
        backgroundColor:'#fff'
    }
});

export default FloatingButton;
