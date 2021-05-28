import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

const Header = props =>{
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerTitle:{
        color:'black',
        fontSize: 18,
        fontFamily:'OpenSans-Bold'
    },
    header: {
        width: '100%',
        height: 100,
        backgroundColor: '#00FFFF',
        paddingTop: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
        
    }

});

export default Header;