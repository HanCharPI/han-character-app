import React from 'react';
import { StyleSheet, View } from 'react-native';
import Canvas from '../components/Canvas'

const MainView = () => {
  return (
    <View style={styles.container}>
      <Canvas />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainView;
