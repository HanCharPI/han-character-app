import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { WhiteSpace } from '@ant-design/react-native';
import { DEVICE_WIDTH } from '../dimensions';

const HistoryCell = ({ kanji, setSelectedKanji }) => {

  const onClickCell = async () => {
    setSelectedKanji(kanji);
  };

  return (
    <TouchableOpacity onPress={() => onClickCell()}>
      <WhiteSpace />
      <View style={styles.container}>
        <Text style={styles.kanji}>
          {kanji}
        </Text>
      </View>
      <WhiteSpace />
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

export default HistoryCell;
