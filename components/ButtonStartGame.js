import React from 'react';
import {View,StyleSheet, TouchableOpacity,Text} from 'react-native';
import Color from '../constants/Color';


const ButtonStartGame = props =>{
    return(
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.5}>
            <View style = {styles.button}>
                <Text style ={styles.text}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    text:{
        fontSize:15,
        color: 'white'
    },
    button:{
        backgroundColor: Color.violet,
        borderRadius:5,
        paddingVertical: 7,
        paddingHorizontal: 15,
    }
});

export default ButtonStartGame;