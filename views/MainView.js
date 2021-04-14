import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { WhiteSpace } from '@ant-design/react-native';
import Canvas from '../components/Canvas';
import ResultsView from './ResultsView';
import InfoView from './InfoView';

const MainView = () => {

  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [results, setResults] = useState(null);
  const [selectedKanji, setSelectedKanji] = useState(null);

  if (selectedKanji === null) {
    return (
      <>
        <View style={styles.titleContainer}>
          <Text>Han characters</Text>
        </View>
        <View style={styles.canvasContainer}>
          <Canvas
            setIsLoadingResults={setIsLoadingResults}
            setResults={setResults}
          />
        </View>
        <WhiteSpace />
        <View style={styles.resultsContainer}>
          <ResultsView
            isLoadingResults={isLoadingResults}
            results={results}
            setSelectedKanji={setSelectedKanji}
          />
        </View>
      </>
    );
  } else {
    return (
      <InfoView
        kanji={selectedKanji}
        setSelectedKanji={setSelectedKanji}
      />
    );
  }
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  canvasContainer: {
    flex: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultsContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainView;
