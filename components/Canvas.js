import React, { Component } from 'react';
import { StyleSheet, View, Button , Text ,SafeAreaView,  AppRegistry} from 'react-native';
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
      borderWidth: 1,
      quality: 0.5,
    });

    // TODO: Post image 64 to axios
    delay(2000).then(() => {
      setResults(['胃', '缶', '水', '火', '木', '白', '威', '空'])
      setIsLoadingResults(false);
    })

  };

  return(
    <>
            <View>
      <Text style={styles.title}>
        Rewind: Delete last change                           Clear: Clean Canvas
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Rewind"
          onPress={() => drawRef.rewind()}/>
        <Button
          title="Clear"
          onPress={() => drawRef.clear()}
        />
      </View>
    </View>
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
         <View style={styles.fixToText}>
        <Button
          title={' Search                                                         '}
          onPress={() => getImage()}
          color="black"

        />
        </View>
    </>
  );
};


const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'stretch',

  },
  button: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderColor: 'blue',
    borderWidth: .5,
    flex: 1,
  },
  canvasContainer: {
    flex: 9,
    width: DEVICE_WIDTH * 0.95,
    borderWidth: 1,
    borderColor: 'black',
  },
   container: {
    flex: 2,
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  title: {
    textAlign: 'center',
    marginVertical: 2,
  },
  fixToText: {
    borderWidth: 1,
        flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'blue',
    textAlign: 'center',
    marginVertical: 4,
  },
  separator: {
    flexDirection: 'row', 
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default Canvas;
