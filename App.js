/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [selectNum, setSelectNum] = useState();
  const [round, setRound] = useState(0);
  const caiLaiGameMoi = () => {
    setRound(0);
    setSelectNum(null);
  };


  const startGameHandler = (userNum) => {
    setSelectNum(userNum);
  };

  const countRound = count => {
    setRound(count);
  };

  let hienThi = <StartGameScreen onSetNumber={startGameHandler} />;
  // hienThi = <GameOverScreen countRound={1} numSelect={1} onRestart={caiLaiGameMoi}/>;
  if (selectNum && round <= 0) {
    hienThi = <GameScreen NumberChosse={selectNum} onCountRound={countRound} />;
  } else if (round > 0) {
    hienThi = <GameOverScreen countRound={round} numSelect={selectNum} onRestart={caiLaiGameMoi} />;
  }

  return (
    <View style={styles.screenHeader}>
      <Header title="GAME ĐOÁN SỐ" />
      {hienThi}
    </View>
  );
};

const styles = StyleSheet.create({
  screenHeader: {
    flex: 1
  }
});


