import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { WhiteSpace } from '@ant-design/react-native';
import { DEVICE_HEIGHT } from '../../dimensions';
import AudioButton from './AudioButton';

const ExamplesRow = ({ examples }) => {

  const exampleComponents = [];

  examples.forEach((example, index) => {
    exampleComponents.push(
      <View key={index}>
        <WhiteSpace />
        <View style={styles.exampleContainer}>
          <View style={styles.sentenceContainer}>
            <Text style={styles.japanese}>
              {'\u25CF'} {example.japanese}
            </Text>
            <Text style={styles.japanese}>
              {example.meaning.english}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <AudioButton uri={example.audio.mp3} />
          </View>
        </View>
        <WhiteSpace />
      </View>

    );
  });

  return (
    <>
      <WhiteSpace />
      <Text style={styles.title}>
        Examples
      </Text>
      <WhiteSpace />
      <View style={styles.container}>
        {exampleComponents}
      </View>
      <WhiteSpace />
    </>
  );

};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
  },
  exampleContainer: {
    flexDirection: "row",
  },
  sentenceContainer: {
    width: '80%',
  },
  buttonContainer: {
    width: '20%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: DEVICE_HEIGHT * 0.026,
  },
  japanese: {
    fontSize: DEVICE_HEIGHT * 0.026,
  },
});

export default ExamplesRow;
