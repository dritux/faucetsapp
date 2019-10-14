import React, { Component } from 'react';
import { Image, Text, Linking, Dimensions, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Button, Grid, Row } from 'native-base';

export default class ExchangeMining extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
                <CardItem cardBody style={styles.cardItem}>
                  <Image
                      source={require('../res/images/binance.png')}
                      style={styles.thumbnail}
                  />
              </CardItem>
              <CardItem note>
                  <Grid>
                      <Row>
                          <Text style={styles.text} >Binance exchange.</Text>
                      </Row>
                  </Grid>
              </CardItem>
              <Button 
                block info 
                style={{
                  color: '#FFFFFF'
                }}
                onPress={ ()=>{ Linking.openURL("https://www.binance.com/en/register?ref=36673622")}}
              >
                <Text> SIGUP </Text>
            </Button>
          </Card>

          <Card>
                <CardItem cardBody style={styles.cardItem}>
                  <Image
                      source={require('../res/images/novadax.png')}
                      style={styles.thumbnail}
                  />
              </CardItem>
              <CardItem note>
                  <Grid>
                      <Row>
                          <Text style={styles.text} >Novadax exchange. </Text>
                      </Row>
                  </Grid>
              </CardItem>
              <Button 
                block info 
                style={{
                  color: '#FFFFFF'
                }}
                onPress={ ()=>{ Linking.openURL("https://novadax.page.link/4Yb3Ts3rW6b5kuzMA")}}
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