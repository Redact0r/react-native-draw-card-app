import React, {useState} from 'react';
import {View, Modal, Button, Text, StyleSheet} from 'react-native';

const ShuffleModal = ({visible, onPress}) => {
  return (
    <Modal animationType={'fade'} visible={visible} transparent={true}>
      <View style={styles.modalOuter}>
        <View style={styles.modalInner}>
          <Text style={styles.modalText}>Shuffled!</Text>
          <Button title="OK" onPress={onPress} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOuter: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
  },

  modalInner: {
    backgroundColor: '#fff',
    padding: 20,
    height: 250,
    width: 250,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  modalText: {
    fontSize: 20,
  },
});

export default ShuffleModal;
