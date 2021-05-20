import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, WhiteSpace, WingBlank } from '@ant-design/react-native'
import { captureRef as takeSnapShotAsync } from 'react-native-view-shot';
import ExpoDraw from 'expo-draw';
import axios from 'axios';
import { DEVICE_WIDTH } from '../dimensions';
import { GET_TOKEN } from '../store/auth';
import { CHARACTER_URL } from '../store/config';

const Canvas = ({ setIsLoadingResults, setResults }) => {

  let drawRef;

  const postImage = async () => {

    const token = await GET_TOKEN();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    const image64 = await takeSnapShotAsync(drawRef, {
      result: 'base64',
      quality: 0.5,
    });

    setIsLoadingResults(true);
    axios.post(CHARACTER_URL, {
      'image-base64': image64,
    }, config)
      .then((response) => {
        const characters = enlistResponse(response.data.character);
        setResults(characters);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoadingResults(false));

  };

  const enlistResponse = (options) => {
    const characters = [];
    for (const [, character] of Object.entries(options)) {
      characters.push(character);
    }
    return characters;
  }

  return(
    <>
      <View
        style={styles.canvasContainer}>
        <ExpoDraw
          ref={ref => (drawRef = ref)}
          strokes={[]}
          color={'#000000'}
          strokeWidth={4}
          enabled={true}
        >
        </ExpoDraw>
      </View>
      <WhiteSpace />
      <View style={styles.buttonsContainer}>
        <WingBlank />
        <Button
          onPress={() => drawRef.clear()}
          style={styles.button}
        >
          <Icon name='delete' color='black' />
        </Button>
        <WingBlank />
        <Button
          onPress={() => drawRef.rewind()}
          style={styles.button}
        >
          <Icon name='undo' color='black' />
        </Button>
        <WingBlank />
        <Button
          onPress={() => postImage()}
          type='primary'
          style={styles.button}
        >
          <Icon name='search' color='white' />
        </Button>
        <WingBlank />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  canvasContainer: {
    flex: 9,
    width: DEVICE_WIDTH * 0.90,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'black',
  },
});

export default Canvas;
