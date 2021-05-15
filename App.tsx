import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
// import {ContadorScreen} from './src/screens/ContadorScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import {DimensionesScreen} from './src/screens/DimensionesScreen';
import {PositionScreen} from './src/screens/PositionScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <HolaMundoScreen /> */}
      {/* <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      <PositionScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
