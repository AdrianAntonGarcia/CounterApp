/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador: {contador}</Text>
      <TouchableOpacity onPress={() => setContador(contador + 1)}>
        <View style={styles.botonIncrementar}>
          <Text>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
  botonIncrementar: {
    backgroundColor: 'red',
    borderRadius: 100,
  },
});
