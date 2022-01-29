import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import FloatingWriteButton from './FloatingWriteButton.js';

function HomeScreen({navigation}) {
    return (
      <View style={styles.block}>
        <Text>Hello World!</Text>
        <FloatingWriteButton/>
      </View>
    );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default HomeScreen;