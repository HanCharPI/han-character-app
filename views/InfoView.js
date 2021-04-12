import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native';

const InfoView = ({ kanji, setSelectedKanji }) => {

  const onClickBack = () => {
    setSelectedKanji(null);
  };

  return (
    <View>
      <Button
        title="Go Back"
        onPress={() => onClickBack()}
      />
      <Text>
        { kanji.toString() }
      </Text>
    </View>
  );

};

export default InfoView;
