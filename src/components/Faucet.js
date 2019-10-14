import React, { Component } from 'react';
import { Image, Linking, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Body, Left, Right, Title, Subtitle } from 'native-base';
import { images } from '../res/CoinIcons';
import LinkButton from "../library/LinkButton";

export default class CardFaucet extends Component {

  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={images['BTC']} />
                <Body>
                  <Text>Free Bitcoin - BTC</Text>
                  <Text note>WIN FREE BITCOINS EVERY HOUR!</Text>
                </Body>
              </Left>
              <LinkButton siteUrl={'https://freebitco.in/?r=18433822'}/>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={images['XRP']} />
                <Body>
                  <Text>Free Ripple - XRP</Text>
                  <Text note>WIN FREE Ripple EVERY HOUR!</Text>
                </Body>
              </Left>
              <LinkButton siteUrl={'https://coinfaucet.io/?ref=560862'}/>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={images['XMR']} />
                <Body>
                  <Text>Free Monero - XMR</Text>
                  <Text note>WIN FREE MONERO EVERY HOUR!</Text>
                </Body>
              </Left>
              <LinkButton siteUrl={'https://free-monero.com/?referer=23326'}/>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={images['BCH']} />
                <Body>
                  <Text>Free Bitcoin Cash - BCH</Text>
                  <Text note>WIN FREE BITCOIN CASH EVERY HOUR!</Text>
                </Body>
              </Left>
              <LinkButton siteUrl={'https://free-bcash.com/?referer=430460'}/>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={images['ETH']} />
                <Body>
                  <Text>Free Ethereum - ETH</Text>
                  <Text note>WIN FREE ETHEREUM EVERY HOUR!</Text>
                </Body>
              </Left>
              <LinkButton siteUrl={'https://free-ethereum.io/?referer=187437'}/>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={images['BTC']} />
                <Body>
                  <Text>FreeBTC - BTC</Text>
                  <Text note>WIN FREE BITCOINS EVERY HOUR!</Text>
                </Body>
              </Left>
              <LinkButton siteUrl={'https://freeb.tc/?r=57619'}/>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={images['BTC']} />
                <Body>
                  <Text>Cointiply - BTC</Text>
                  <Text note>WIN FREE BITCOINS EVERY HOUR!</Text>
                </Body>
              </Left>
              <LinkButton siteUrl={'http://cointiply.com/r/z5Plk'}/>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={images['BTC']} />
                <Body>
                  <Text>BitFun - BTC</Text>
                  <Text note>WIN FREE BITCOIN EVERY HOUR!</Text>
                </Body>
              </Left>
              <LinkButton siteUrl={'http://bitfun.co/?ref=77D6D54003C5'}/>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
