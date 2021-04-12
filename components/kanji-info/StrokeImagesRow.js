import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { WhiteSpace } from '@ant-design/react-native';
import SvgUri from 'expo-svg-uri';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../dimensions';

const StrokeImagesRow = ({ imageUris }) => {

  const images = [];

  imageUris.forEach((uri, index) => {
    images.push(
      <SvgUri
        style={styles.cell}
        width={DEVICE_HEIGHT * 0.06}
        height={DEVICE_HEIGHT * 0.06}
        key={index}
        source = {{ uri }}
      />
    );
  });

  return (
    <>
      <WhiteSpace />
      <Text style={styles.title}>
        Strokes
      </Text>
      <WhiteSpace />
      <View style={styles.container}>
        {images}
      </View>
      <WhiteSpace />
    </>
  );

};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    fontWeight: 'bold',
    fontSize: DEVICE_HEIGHT * 0.026,
  },
  cell: {
    marginHorizontal: DEVICE_WIDTH * 0.01,
  }
});

export default StrokeImagesRow;
