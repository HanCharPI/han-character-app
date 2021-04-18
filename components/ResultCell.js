import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { getHistory, setHistory } from '../store/history';
import { DEVICE_WIDTH } from '../dimensions';

const ResultCell = ({ kanji, setSelectedKanji }) => {

  const onClickCell = async () => {
    let history = await getHistory();
    if (history == null) {
      await setHistory(kanji)
    } else {
      history = history.split('');
      const historySet = new Set(history);
      if (!historySet.has(kanji)) {
        history.unshift(kanji);
        await setHistory(history.join(''));
      }
    }
    setSelectedKanji(kanji);
  };

  return (
    <TouchableOpacity onPress={() => onClickCell()}>
      <View style={styles.container}>
        <Text style={styles.kanji}>
          {kanji}
        </Text>
      </View>
    </TouchableOpacity>
  );

};

const styles = StyleSheet.create({
  container: {
    minWidth: DEVICE_WIDTH * 0.18,
    marginHorizontal: DEVICE_WIDTH * 0.02,
    aspectRatio: 1,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  kanji: {
    fontSize: DEVICE_WIDTH * 0.08
  }
});

export default ResultCell;
