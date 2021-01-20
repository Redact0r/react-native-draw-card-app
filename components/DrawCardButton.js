import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const DrawCardButton = ({title, onPress}) => {
  return (
    <View style={styles.drawCardButton}>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  drawCardButton: {
    width: 150,
    marginBottom: 50,
    paddingBottom: 100,
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default DrawCardButton;
