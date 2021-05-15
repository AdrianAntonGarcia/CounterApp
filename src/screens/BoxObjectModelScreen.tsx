import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    // la vista es limitada por su contenido hijos
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    paddingHorizontal: 100,
    paddingVertical: 20,
    fontSize: 20,
    marginHorizontal: 20,
    // backgroundColor: 'green',
    // width: 150,
    borderWidth: 10,
  },
});
