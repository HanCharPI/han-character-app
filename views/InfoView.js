import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, SafeAreaView, ScrollView } from 'react-native';
import { WhiteSpace, WingBlank } from '@ant-design/react-native';
import { default as kanjiJson } from '../assets/data/kanji_info.json';
import { DEVICE_HEIGHT, DEVICE_WIDTH, STATUS_BAR_HEIGHT } from '../dimensions';
import StrokeImagesRow from '../components/kanji-info/StrokeImagesRow';
import ExamplesRow from '../components/kanji-info/ExamplesRow';

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

  const getStrokeImages = () => {
    if (kanjiInfo.kanji.strokes.images != null) {
      return <StrokeImagesRow imageUris={kanjiInfo.kanji.strokes.images} />;
    }
  };

  const getOnyomi= () => {
    const onyomi = kanjiInfo.kanji.onyomi;
    if (onyomi != null) {
      return (
        <>
          <WhiteSpace />
          <Text style={styles.onyomi}>
            {`${onyomi.katakana} (${onyomi.romaji})`}
          </Text>
          <WhiteSpace />
        </>
      );
    }
  }

  const getKunyomi = () => {
    const kunyomi = kanjiInfo.kanji.kunyomi;
    if (kunyomi != null) {
      return (
        <>
          <WhiteSpace />
          <Text style={styles.kunyomi}>
            {`${kunyomi.hiragana} (${kunyomi.romaji})`}
          </Text>
          <WhiteSpace />
        </>
      );
    }
  };

  const getExamples = () => {
    if (kanjiInfo.examples != null) {
      return <ExamplesRow examples={kanjiInfo.examples} />
    }
  };

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
        <WingBlank />
        <Text style={styles.mainKanji}>
          {kanji}
        </Text>
        <WingBlank />
        <SafeAreaView style={styles.safeContainer}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {getOnyomi()}
            {getKunyomi()}
            {getStrokeImages()}
            {getExamples()}
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
  safeContainer: {
    flex: 8,
  },
  scrollContainer: {
    alignItems: 'center',
  },
  onyomi: {
    fontSize: DEVICE_HEIGHT * 0.03,
    fontWeight: 'bold',
    color: 'firebrick',
  },
  kunyomi: {
    fontSize: DEVICE_HEIGHT * 0.03,
    fontWeight: 'bold',
    color: 'midnightblue',
  },
});

export default InfoView;
