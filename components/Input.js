import React from 'react';
import {View,StyleSheet,TextInput} from 'react-native';

const Input = props => {
    return(
        <TextInput {...props} style={{...styles.Input,...props.style}} />
    );
};

const styles = StyleSheet.create({
    Input:{
        height:30,
        borderBottomColor:'grey',
        padding:5,
        borderBottomWidth:1,
        margin:10,
    }
});

export default Input;