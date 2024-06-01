import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function App() {
  const handleButtonPress = () => {
    // Lógica para lidar com o pressionamento do botão
    console.log('Botão pressionado!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>FRASES RANDOM</Text>
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
