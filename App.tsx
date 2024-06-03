import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import VideoScreen from './VideoScreen';
import frases from './frases';

function App() {
  const [showVideo, setShowVideo] = useState(true);
  const [currentFrase, setCurrentFrase] = useState('');

  const handleButtonPress = () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    setCurrentFrase(frases[randomIndex]);
    console.log('Botão pressionado!', frases[randomIndex]);
  };

  if (showVideo) {
    return <VideoScreen onVideoEnd={() => setShowVideo(false)} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>FRASES RANDOM</Text>
      {currentFrase ? <Text style={styles.frase}>{currentFrase}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#040706',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  frase: {
    fontSize: 20,
    fontStyle: 'italic',
    marginBottom: 20,
    color: '#41fff9',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#007b',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
