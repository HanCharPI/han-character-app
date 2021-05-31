import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Icon, WhiteSpace } from '@ant-design/react-native';
import { DEVICE_HEIGHT } from '../dimensions';
import Canvas from '../components/Canvas';
import ResultsView from './ResultsView';
import InfoView from './InfoView';
import HistoryView from './HistoryView';

const MainView = () => {

  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [results, setResults] = useState(null);
  const [selectedKanji, setSelectedKanji] = useState(null);
  const [isHistorySelected, setIsHistorySelected] = useState(false);

  const onClickHistory = () => {
    setIsHistorySelected(true);
  };

  if (isHistorySelected) {
    return <HistoryView setIsHistorySelected={setIsHistorySelected} />
  } else if (selectedKanji === null) {
    return (
      <>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Han characters
          </Text>
          <Button
            onPress={() => onClickHistory()}
          >
            <Icon name='book' color='black' />
          </Button>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
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
  titleText: {
    fontSize: DEVICE_HEIGHT * 0.03,
    fontWeight: 'bold',
    color: 'black',
  }
});

export default MainView;
