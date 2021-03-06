import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DEVICE_HEIGHT } from '../dimensions';
import ResultCell from '../components/ResultCell';

const ResultsView = ({ isLoadingResults, results }) => {

  let resultsCellsList = [];
  if (results !== null) {
    results.forEach((result, index) => {
      resultsCellsList.push( <ResultCell kanji={result} key={index} />)
    })
  }

  if (isLoadingResults) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    if (results !== null) {
      return (
        <View style={styles.container}>
          {resultsCellsList}
        </View>
      );
    } else {
      return (
        <View>
          <Text>No results</Text>
        </View>
      );
    }
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'space-around',
    paddingBottom: DEVICE_HEIGHT * 0.01
  },
});

export default ResultsView;
