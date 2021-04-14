import React, { useEffect, useState } from 'react';
import { Button, Icon } from '@ant-design/react-native';
import { Audio } from 'expo-av';

const AudioButton = ({ uri }) => {

  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = async () => {
    setIsPlaying(true);
    const { sound } = await Audio.Sound.createAsync({ uri });
    setSound(sound);
    await sound.playAsync();
    setIsPlaying(false);
  };

  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  return (
    <Button
      onPress={() => playAudio()}
      disabled={isPlaying}
      type='primary'
    >
      <Icon name='sound' color='white' />
    </Button>
  );

};

export default AudioButton;
