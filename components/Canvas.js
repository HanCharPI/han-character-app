import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { captureRef as takeSnapShotAsync } from 'react-native-view-shot';
import ExpoDraw from 'expo-draw';

const Canvas = ({ setIsLoadingResults }) => {

  let drawRef;

  const getImage = async () => {

    const delay = ms => new Promise(res => setTimeout(res, ms));
    setIsLoadingResults(true);

    const image64 = await takeSnapShotAsync(drawRef, {
      result: 'base64',
      quality: 0.5,
    });

    // TODO: Post image 64 to axios
    await delay(2000);

    setIsLoadingResults(false);
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
      <View style={styles.buttonsContainer}>
        <Button
          title={'Rewind'}
          onPress={() => drawRef.rewind()}
          style={styles.button}
        />
        <Button
          title={'Clear'}
          onPress={() => drawRef.clear()}
          style={styles.button}
        />
        <Button
          title={'Search'}
          onPress={() => getImage()}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
  },
  canvasContainer: {
    flex: 9,
    width: '90%',
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default Canvas;
