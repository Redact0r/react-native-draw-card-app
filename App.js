import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import DrawCardButton from './components/DrawCardButton';

const App = () => {
  const [deckId, setDeckId] = useState('nr2zoehl1tii');
  const [cardImage, setCardImage] = useState('');
  const [cardsRemaining, setCardsRemaining] = useState(0);

  const onPress = async () => {
    const getString = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
    const shuffleString = `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`;

    if (cardsRemaining === 0) {
      const shuffleDeck = await fetch(shuffleString)
        .then((res) => (res.ok ? res.json() : new Error(res.error)))
        .then((data) => (data.success ? data : new Error(data.error)))
        .catch((error) => console.log(error.message));

      alert('Deck shuffled!');

      setCardsRemaining(shuffleDeck.remaining);
    }

    const cardData = await fetch(getString)
      .then((res) => res.json())
      .then((data) => (data.success ? data : new Error(data.error)))
      .catch((error) => console.log(error.message));
    setCardsRemaining(cardData.remaining);
    setCardImage(cardData.cards[0].image);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.cardContainer}>
        <Card card={cardImage} />
        <Text>{cardsRemaining}</Text>
      </View>
      <View styles={styles.drawCardButtonContainer}>
        <DrawCardButton
          title="Draw a Card"
          deckId={deckId}
          onPress={() => onPress()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a6c03',
  },

  cardContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  drawCardButtonContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
