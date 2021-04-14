import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DEVICE_HEIGHT } from '../dimensions';
import ResultCell from '../components/ResultCell';
import { ActivityIndicator, WhiteSpace } from '@ant-design/react-native'

const ResultsView = ({ isLoadingResults, results, setSelectedKanji }) => {

  let resultsCellsList = [];
  if (results !== null) {
    results.forEach((result, index) => {
      resultsCellsList.push(
        <ResultCell
          kanji={result}
          key={index}
          setSelectedKanji={setSelectedKanji}
        />)
    })
  }

  if (isLoadingResults) {
    return (
      <View>
        <Text style={styles.loadingText}>
          Loading results...
        </Text>
        <WhiteSpace />
        <ActivityIndicator size="large"/>
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
  loadingText: {
    fontSize: DEVICE_HEIGHT * 0.032
  },
});

export default ResultsView;
