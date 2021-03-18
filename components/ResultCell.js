import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { DEVICE_WIDTH } from '../dimensions';

const ResultCell = ({ kanji }) => {

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.kanji}>{kanji}</Text>
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
