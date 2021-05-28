import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import Color from '../constants/Color';
import Input from '../components/Input';
import ButtonStartGame from '../components/ButtonStartGame';

const StartGameScreen = props => {
    const [dataInput, setDataInput] = useState('');
    const [selectedNumber, setSelectedNumber] = useState();
    const [confirm, setConfirm] = useState(false);

    const dataInputHandler = inputText => {
        setDataInput(inputText.replace(/[^0-9]/g, ''));
    };
    const confirmHandler = () => {
        const number = parseInt(dataInput);
        if (number <= 0 || number > 99 || isNaN(number)) {
            Alert.alert('Lỗi Nhập Số', 'Số phải nằm trong vùng từ 1 đến 99', [{ Text: 'OKE', style: 'destructive', onPress: resetInput }]);
            return;
        }
        setSelectedNumber(number);
        setDataInput('');
        setConfirm(true);
        Keyboard.dismiss();
    };

    const resetInput = () => {
        setConfirm(false);
        setDataInput('');
    };

    let confirmOutput;
    if (confirm) {
        confirmOutput = (
            <Card style={styles.cardStartGame}>
                <Text>Số Bạn Chọn</Text>
                <View style={styles.textContainer}>
                    <Text style={{ fontSize: 20 }}>{selectedNumber}</Text>
                </View>
                
                    <ButtonStartGame onPress = {() => props.onSetNumber(selectedNumber)}>Bắt Đầu</ButtonStartGame>
                
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Màn hình bắt đầu game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Vui lòng chọn số !!</Text>
                    <Input style={styles.input} blurOnsubmit autoCapitalaze='none' autoCorrect={false} keyboardType="numeric" maxLength={2} value={dataInput}
                        onChangeText={dataInputHandler} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button color={Color.pink} title="Khôi Phục" onPress={resetInput} /></View>

                        <View style={styles.button}><Button color={Color.violet} title="Xác Nhận" onPress={confirmHandler} /></View>
                    </View>
                </Card>
                {confirmOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 30,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        fontFamily: 'SigmarOne'
    },
    button: {
        width: 100
    },
    input: {
        width: 100,
        textAlign: 'center'
    },
    cardStartGame: {
        margin: 20,
        width: 200,
        height: 150,
        alignItems: 'center'
    },
    textContainer: {
        borderBottomColor: Color.violet,
        borderBottomWidth: 1,
        marginTop: 5,
        marginBottom: 20
    }
});

export default StartGameScreen;