import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, SafeAreaView, ScrollView } from 'react-native';
import SvgUri from 'expo-svg-uri';
import { default as kanjiJson } from '../assets/data/kanji_info.json';
import { DEVICE_HEIGHT, DEVICE_WIDTH, STATUS_BAR_HEIGHT } from '../dimensions'

const InfoView = ({ kanji, setSelectedKanji }) => {

  const [kanjiInfo, setKanjiInfo] = useState(null);

  const delay = ms => new Promise(res => setTimeout(res, ms));

  const onClickBack = () => {
    setSelectedKanji(null);
  };

  useEffect(() => {
    delay(2000)
      .then(() => {
        setKanjiInfo(kanjiJson);
      })
  }, [])

  if (kanjiInfo === null) {
    return (
      <View>
        <Text>
          { `Loading ${kanji}...` }
        </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Button
          title="Go Back"
          onPress={() => onClickBack()}
          style={styles.backButton}
        />
        <Text style={styles.mainKanji}>
          {kanji}
        </Text>
        <SafeAreaView style={styles.scrollContainer}>
          <ScrollView>
            <Text>
              { JSON.stringify(kanjiInfo) }
            </Text>
            <SvgUri
              source={{ uri: kanjiInfo.kanji.strokes.images[0] }}
            />
          </ScrollView>
        </SafeAreaView>
        <Text>
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
  backButton: {
    flex: 1,
  },
  mainKanji: {
    flex: 1,
    textAlign: 'center',
    fontSize: DEVICE_HEIGHT * 0.08,
  },
  scrollContainer: {
    flex: 8,
  },
});

export default InfoView;
