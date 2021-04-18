import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { ActivityIndicator, Icon, WhiteSpace, Button } from '@ant-design/react-native'
import { getHistory, clearHistory } from '../store/history';
import { DEVICE_HEIGHT, DEVICE_WIDTH, STATUS_BAR_HEIGHT } from '../dimensions'
import HistoryCell from '../components/HistoryCell';
import InfoView from './InfoView';

const HistoryView = ({ setIsHistorySelected }) => {

  const [isLoadingHistory, setIsLoadingHistory] = useState(false);
  const [history, setHistory] = useState(null);
  const [selectedKanji, setSelectedKanji] = useState(null);

  const onClickBack = () => {
    setIsHistorySelected(false);
  };

  const onClickClear = () => {
    setIsLoadingHistory(true);
    clearHistory()
      .then(() => {
        getHistory()
          .then((history) => setHistory(history))
          .finally(() => setIsLoadingHistory(false));
      })
  };

  useEffect(() => {
    setIsLoadingHistory(true);
    getHistory()
      .then((history) => {
        if (history !== null) {
          setHistory(history.split(''));
        }
      })
      .finally(() => setIsLoadingHistory(false));
  }, []);

  let historyCellsList = [];
  if (history != null) {
    history.forEach((result, index) => {
      historyCellsList.push(
        <HistoryCell
          kanji={result}
          key={index}
          setSelectedKanji={setSelectedKanji}
        />)
    })
  }

  if (selectedKanji != null) {
    return (
      <InfoView
        kanji={selectedKanji}
        setSelectedKanji={setSelectedKanji}
      />
    );
  } else if (isLoadingHistory) {
    return (
      <View>
        <Text style={styles.titleText}>
          Loading history...
        </Text>
        <WhiteSpace />
        <ActivityIndicator size="large"/>
      </View>
    );
  } else if (history == null) {
    return (
      <View style={styles.container}>
        <WhiteSpace />
        <WhiteSpace />
        <Button
          type='ghost'
          onPress={() => onClickBack()}
        >
          Go back
        </Button>
        <WhiteSpace />
        <Text style={styles.titleText}>
          No kanji found in history!
        </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Button
            onPress={() => onClickBack()}
            type='primary'
          >
            <Icon name='rollback' color='white'/>
          </Button>
          <Text style={styles.titleText}>
            History
          </Text>
          <Button
            onPress={() => onClickClear()}
            type='warning'
          >
            <Icon name='delete' color='white'/>
          </Button>
        </View>
        <SafeAreaView style={styles.resultsContainer}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {historyCellsList}
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: DEVICE_WIDTH * 0.05,
    marginTop: STATUS_BAR_HEIGHT,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  resultsContainer: {
    flex: 8,
  },
  scrollContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'space-around',
  },
  titleText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: DEVICE_HEIGHT * 0.04,
  },
});

export default HistoryView;
