import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { ActivityIndicator, Icon, WhiteSpace, Button } from '@ant-design/react-native'
import { getHistory, clearHistory } from '../store/history';
import { DEVICE_HEIGHT, DEVICE_WIDTH, STATUS_BAR_HEIGHT } from '../dimensions'

const HistoryView = ({ setIsHistorySelected }) => {

  const [isLoadingHistory, setIsLoadingHistory] = useState(false);
  const [history, setHistory] = useState(null);

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
          console.log(history);
          setHistory(history.split(''));
        }
      })
      .finally(() => setIsLoadingHistory(false));
  }, []);

  if (isLoadingHistory) {
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
        <Button
          type='ghost'
          onPress={() => onClickBack()}
        >
          Go back
        </Button>
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
          <View>
            <Button
              onPress={() => onClickClear()}
              type='warning'
            >
              <Icon name='delete' color='white'/>
            </Button>
          </View>
        </View>
        <Text>
          {history.toString()}
        </Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: DEVICE_HEIGHT * 0.04,
  },
});

export default HistoryView;
