import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, WhiteSpace, WingBlank } from '@ant-design/react-native'
import { captureRef as takeSnapShotAsync } from 'react-native-view-shot';
import ExpoDraw from 'expo-draw';
import { DEVICE_WIDTH } from '../dimensions';

const Canvas = ({ setIsLoadingResults, setResults }) => {

  let drawRef;

  const getImage = async () => {

    const delay = ms => new Promise(res => setTimeout(res, ms));
    setIsLoadingResults(true);

    const image64 = await takeSnapShotAsync(drawRef, {
      result: 'base64',
      quality: 0.5,
    });

    // TODO: Post image 64 to axios
    delay(1000).then(() => {
      setResults(['胃', '缶', '水', '火', '木', '白', '威', '空'])
      setIsLoadingResults(false);
    })

  };

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
          onPress={() => getImage()}
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
