import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  View
} from 'react-native';

import Header from './src/components/Header';


class App extends Component {
  render() {
    const title = 'meu titulo';
    return (
      <View style={styles.itemsContainer}>
        <Header title={title}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemsContainer: {
    backgroundColor: '#f4f5f9',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 25,
  },
});

export default App;