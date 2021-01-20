import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Spit',
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#E3EDE3',
  },

  text: {
    color: '#6c030a',
    fontStyle: 'italic',
    fontSize: 23,
    textAlign: 'center',
    textShadowColor: 'darkred',
    textShadowOffset: {width: 0.5, height: 0.5},
    textShadowRadius: 1,
  },
});

export default Header;
