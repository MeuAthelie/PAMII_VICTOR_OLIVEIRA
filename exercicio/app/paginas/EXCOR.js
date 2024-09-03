import React, { useState } from 'react';
import { SafeAreaView, TextInput, Text, StyleSheet, View, Button } from 'react-native';

const App = () => {
  const [color, setColor] = useState('');

  return (
    <SafeAreaView style={styles.container}> {/* é um tipo de 'View' que encapsula os elementos em uma área segura, para não haver conflito com outros elementos da tela que não fazem parte do aplicativo */}
      <TextInput
        style={styles.input}
        placeholder="Digite a cor desejada (Em ingles)"
        onChangeText={setColor}
      />
      <Text style={[styles.text, { color: color }]}>
        Este texto mudará de cor
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
  text: {
    fontSize: 60,
  },
});

export default App;
