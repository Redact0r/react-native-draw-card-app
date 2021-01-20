import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const StartButton = ({title, onPress, shouldShow}) => {
  return (
    <View style={styles.startButton}>
      {shouldShow ? (
        <Button title={title} onPress={onPress} color={'#6c030a'} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  startButton: {
    width: 150,
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'red',
  },
});

export default StartButton;
