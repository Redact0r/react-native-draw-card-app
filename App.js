import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal, Button} from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import DrawCardButton from './components/DrawCardButton';
import StartButton from './components/StartButton';
import ShuffleModal from './components/ShuffleModal';

const App = () => {
  const [deckId, setDeckId] = useState('nr2zoehl1tii');
  const [cardImage, setCardImage] = useState('');
  const [cardsRemaining, setCardsRemaining] = useState(52);
  const [startButtonShowState, setStartButtonShowState] = useState(true);
  const [drawButtonDisabledState, setDrawButtonDisabledState] = useState(true);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const toggleModal = () => {
    setModalIsVisible(false);
  };

  const onStartPress = async () => {
    const getNewDeckString = `https://deckofcardsapi.com/api/deck/new/shuffle/`;

    const shuffleDeck = await fetch(getNewDeckString)
      .then((res) => (res.ok ? res.json() : new Error(res.error)))
      .then((data) => (data.success ? data : new Error(data.error)))
      .catch((error) => {
        console.log(error.message);
        throw error;
      });

    setDeckId(shuffleDeck.deck_id);
    setStartButtonShowState(false);
    setDrawButtonDisabledState(false);
  };
  const onPress = async () => {
    const getString = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
    const shuffleString = `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`;

    if (cardsRemaining === 0) {
      const shuffleDeck = await fetch(shuffleString)
        .then((res) => (res.ok ? res.json() : new Error(res.error)))
        .then((data) => (data.success ? data : new Error(data.error)))
        .catch((error) => {
          console.log('Encountered a problem:' + error.message);
          throw error;
        });

      setModalIsVisible(true);
      setCardsRemaining(shuffleDeck.remaining);
    }

    const cardData = await fetch(getString)
      .then((res) => res.json())
      .then((data) => (data.success ? data : new Error(data.error)))
      .catch((error) => console.log(error.message));
    try {
      setCardsRemaining(cardData.remaining);
      setCardImage(cardData.cards[0].image);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.cardContainer}>
        <Card card={cardImage} />
        <Text style={styles.cardsRemainingText}>{cardsRemaining}</Text>
      </View>
      <View style={styles.drawCardButtonContainer}>
        <DrawCardButton
          title="Draw a Card"
          deckId={deckId}
          onPress={() => onPress()}
          disabled={drawButtonDisabledState}
        />
        <StartButton
          title={'Start'}
          shouldShow={startButtonShowState}
          onPress={() => onStartPress()}
        />
        <ShuffleModal visible={modalIsVisible} onPress={() => toggleModal()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsRemainingText: {
    color: '#fff',
  },

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
