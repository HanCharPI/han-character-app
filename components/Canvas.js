import React from 'react';
import { StyleSheet, View, Button } from 'react-native'
import ExpoDraw from 'expo-draw'

const Canvas = () => {

  let drawRef;

  return(
    <>
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
    width: '95%',
    backgroundColor: '#faa',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: '5%'
  },
});

export default Canvas;
