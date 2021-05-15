import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
// import {ContadorScreen} from './src/screens/ContadorScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import {DimensionesScreen} from './src/screens/DimensionesScreen';
// import {PositionScreen} from './src/screens/PositionScreen';
// import {FlexScreen} from './src/screens/FlexScreen';
// import {Tarea1Screen} from './src/screens/Tarea1Screen';
// import {Tarea2Screen} from './src/screens/Tarea2Screen';
import {Tarea3Screen} from './src/screens/Tarea3Screen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <HolaMundoScreen /> */}
      {/* <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      {/* <Tarea1Screen /> */}
      {/* <Tarea2Screen /> */}
      <Tarea3Screen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
  },
});
