import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

const Card = ({card}) => {
  return (
    <View>
      <Image
        source={{
          uri: card || 'https://deckofcardsapi.com/static/img/KH.png',
        }}
        style={styles.imgView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgView: {
    marginTop: 150,
    resizeMode: 'contain',
    width: 150,
    height: 150,
  },
});

export default Card;
