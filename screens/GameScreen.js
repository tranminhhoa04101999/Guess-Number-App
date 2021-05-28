import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, Button, Alert, ScrollView, FlatList } from 'react-native';
import Card from '../components/Card';
import Color from '../constants/Color';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import ButtonCusTom from '../components/ButtonCustom';
const GenerateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        GenerateRandomNumber(min, max, exclude);
    } else {
        return rndNum;
    }
};

const renderListKQ = (listlengh,itemdata) =>
(<Card style={styles.card}>
    <View style={styles.inList}>
        <Text>#{listlengh-itemdata.index}</Text>
        <Text>{itemdata.item}</Text>
    </View>
</Card>);

const GameScreen = props => {
    const soDau = GenerateRandomNumber(1, 100, props.NumberChosse);
    const [NumGuess, setNumGuess] = useState(soDau);
    const [doanDung, setDoanDung] = useState([soDau]);
    const currentHight = useRef(100);
    const currentLower = useRef(1);

    const { NumberChosse, onCountRound } = props;

    useEffect(() => {
        if (NumGuess === NumberChosse) {
            props.onCountRound(doanDung.length);
        }
    }, [NumGuess, NumberChosse, onCountRound]);

    const xacThuc = (xacthuc) => {
        if ((xacthuc === 'thaphon' && NumGuess < props.NumberChosse) || (xacthuc === 'caohon' && NumGuess > props.NumberChosse)) {
            Alert.alert('Gợi ý \'Sai', 'Đưa ra gợi ý sai cho máy', [{ text: 'Xin Lỗi', style: 'cancel' }]);
            return;
        }
        if (xacthuc === 'thaphon') {
            currentHight.current = NumGuess;
        }
        if (xacthuc === 'caohon') {
            currentLower.current = NumGuess;
        }
        const nextNum = GenerateRandomNumber(currentLower.current, currentHight.current, NumGuess);
        // setRound(round => round+1);
        setDoanDung(soVuaDoanDung => [nextNum, ...soVuaDoanDung]);
        setNumGuess(nextNum);
    };

    return (
        <View style={styles.GameScreen}>
            <Text style={{ fontSize: 20 }}>Số máy đoán</Text>
            <Text style={styles.textContainer}>{NumGuess}</Text>
            <Card style={styles.buttonContainer}>
                <ButtonCusTom onPress={xacThuc.bind(this, 'thaphon')}><Ionicons name="minus" size={24} color="black" /></ButtonCusTom>
                <ButtonCusTom onPress={xacThuc.bind(this, 'caohon')}><Ionicons name="plus" size={24} color="black" /></ButtonCusTom>
            </Card>
            <View style={styles.list}>
                {/* <ScrollView contentContainerStyle = {styles.scrollView}>
                    {doanDung.map((data,index) => renderListKQ(data,index))}
                </ScrollView> */}
                <FlatList 
                    keyExtractor={item => item+Math.random()}
                    data={doanDung}
                    renderItem={renderListKQ.bind(this, doanDung.length)}
                    contentContainerStyle = {styles.scrollView}
                />
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    textContainer: {
        borderBottomColor: Color.violet,
        borderBottomWidth: 1,
        marginTop: 5,
        marginBottom: 20,
        fontSize: 30,
        color: Color.violet,
    }, buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        paddingHorizontal: 30,
    },
    GameScreen: {
        flex: 1,
        marginTop: 30,
        alignItems: 'center',
    },
    listKQ: {
        borderColor: Color.violet,
        borderWidth: 1,
        width: '80%',
    },
    list: {
        width: '60%',
    },
    card: {
        marginTop:5,
        width:'100%',
    },
    inList: {   //list
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
    },
    scrollView: { // in
        
    }
});

export default GameScreen;