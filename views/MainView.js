import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Canvas from '../components/Canvas'
import ResultsView from './ResultsView'

const MainView = () => {

  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [results, setResults] = useState(null);

  return (
    <>
      <View style={styles.titleContainer}>
        <Text>Han characters</Text>
      </View>
      <View style={styles.canvasContainer}>
        <Canvas
          setIsLoadingResults={setIsLoadingResults}
        />
      </View>
      <View style={styles.resultsContainer}>
        <ResultsView
          isLoadingResults={isLoadingResults}
          results={results}
        />
      </View>
    </>



  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  canvasContainer: {
    flex: 4,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultsContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainView;
