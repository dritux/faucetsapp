import React, { Component } from 'react';
import { Image, Text, Linking, Dimensions, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Button, Grid, Row } from 'native-base';

export default class CardMining extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
                <CardItem cardBody style={styles.cardItem}>
                  <Image
                      source={require('../res/images/minergate.png')}
                      style={styles.thumbnail}
                  />
              </CardItem>
              <CardItem note>
                  <Grid>
                      <Row>
                          <Text style={styles.text} >MinerGate xFast GUI Miner is an easy-to-use yet high-performance mining software. Based on the new code architecture, the app shows impressive hashing output, making your mining experience even more efficient. Download and Start Mining.</Text>
                      </Row>
                  </Grid>
              </CardItem>
              <Button 
                block info 
                style={{
                  color: '#FFFFFF'
                }}
                onPress={ ()=>{ Linking.openURL("https://minergate.com/a/77e2241ff1e98daf3c094ec5")}}
              >
                <Text> SIGUP </Text>
            </Button>
          </Card>

          <Card>
                <CardItem cardBody style={styles.cardItem}>
                  <Image
                      source={require('../res/images/eobot.png')}
                      style={styles.thumbnail}
                  />
              </CardItem>
              <CardItem note>
                  <Grid>
                      <Row>
                          <Text style={styles.text} >Eobot is a real-time exchange allowing trading between Bitcoin, Ethereum, Litecoin, Bitcoin Cash, Dogecoin, Ripple, Dash, Tron, Cardano, CureCoin, NEM, Monero, Zcash, Factom, Bytecoin, STEEM, Lisk, EOS, USDC, Stellar, Ethereum Classic, and Grin. </Text>
                      </Row>
                  </Grid>
              </CardItem>
              <Button 
                block info 
                style={{
                  color: '#FFFFFF'
                }}
                onPress={ ()=>{ Linking.openURL("https://www.eobot.com/user/2381201")}}
              >
                <Text> SIGUP </Text>
            </Button>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    thumbnail: {
        flex: 0
    },
    text: {
      textAlign: 'justify',
      marginTop:0,
      color: "#666666"
    },
    cardItem: {
      justifyContent: 'center',
      alignItems: 'center',
    }
});