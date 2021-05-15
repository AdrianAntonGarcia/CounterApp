import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Tarea4Screen = () => {
  return (
    <View style={styles.containter}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'space-between',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    alignSelf: 'flex-end',
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    // flex: 1,
    width: 100,
    height: 100,
    borderWidth: 10,
    alignSelf: 'center',
    borderColor: 'white',
    backgroundColor: '#F0A23B',
  },
  cajaAzul: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
  },
});
