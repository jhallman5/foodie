import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Card, Button } from 'react-native-elements'
import Deck from './Deck'

const DATA = [
  {id: 1, text: 'Card #1', uri: `https://media-cdn.tripadvisor.com/media/photo-o/0a/56/44/5a/restaurant.jpg`},
  {id: 2, text: 'Card #2', uri: `https://media-cdn.tripadvisor.com/media/photo-o/0a/56/44/5a/restaurant.jpg`},
  {id: 3, text: 'Card #3', uri: `https://media-cdn.tripadvisor.com/media/photo-o/0a/56/44/5a/restaurant.jpg`},
  {id: 4, text: 'Card #4', uri: `https://media-cdn.tripadvisor.com/media/photo-o/0a/56/44/5a/restaurant.jpg`},
  {id: 5, text: 'Card #5', uri: `https://media-cdn.tripadvisor.com/media/photo-o/0a/56/44/5a/restaurant.jpg`},
  {id: 6, text: 'Card #6', uri: `https://media-cdn.tripadvisor.com/media/photo-o/0a/56/44/5a/restaurant.jpg`},
  {id: 7, text: 'Card #7', uri: `https://media-cdn.tripadvisor.com/media/photo-o/0a/56/44/5a/restaurant.jpg`},
  {id: 8, text: 'Card #8', uri: `https://media-cdn.tripadvisor.com/media/photo-o/0a/56/44/5a/restaurant.jpg`},
]

export default class App extends Component<{}> {
  renderCard(item) {
    return (
    <Card
      key={item.id}
      title={item.text}
      image={{ uri: item.uri}}
    >
      <Text style={{marginBottom: 10 }}> I can Customize the card Further</Text>
      <Button
        icon={{ name: 'code'}}
        backgroundColor="#03A9F4"
        title="View Now!"
       />
    </Card>
    )
  }

  render() {
    return (
      // CARD for later use
      // <View style={styles.card}>
      //   <Image
      //     style={{flex: 1}}
      //     source={{uri: `https://media-cdn.tripadvisor.com/media/photo-o/0a/56/44/5a/restaurant.jpg`}} />
      //   <View style={{margin:20}}>
      //     <Text style={{fontSize:20}}>Type / Price </Text>
      //     <Text style={{fontSize: 15}}>Name / Rating </Text>
      //   </View>
      // </View>
      <View style={styles.card}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    // overflow: 'hidden',
    // backgroundColor: 'white',
    // margin: 20,
    // marginTop: 100,
    // marginBottom: 100,
    // borderWidth: 1,
    // borderColor: 'lightgrey',
    // borderRadius: 8,
  },
});
