import React from 'react';
import {View, StyleSheet} from 'react-native';
import Video from 'react-native-video';

const VideoScreen = ({onVideoEnd}) => {
  // Caminho estático para o arquivo de vídeo
  const videoSource = require('./media/Random.mp4');

  return (
    <View style={styles.container}>
      <Video
        source={videoSource}
        style={styles.video}
        resizeMode="cover"
        muted={true}
        repeat={false}
        onLoad={() => {
          // Lógica a ser executada quando o vídeo é carregado
          console.log('Vídeo carregado');
        }}
        onEnd={onVideoEnd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default VideoScreen;
