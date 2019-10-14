import React, { Component } from 'react';
import { Container, Tab, Tabs, TabHeading, Icon, Body, Text, Left, Right } from 'native-base';
import TitleHeader from './src/components/Header';
import Faucet from './src/components/Faucet';
import Mining from './src/components/Mining';
import Exchange from './src/components/Exchange';
export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container>
        <TitleHeader />
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="home" /><Text>Faucets</Text></TabHeading>}>
            <Faucet />
          </Tab>
          <Tab heading={ <TabHeading><Text>Mining</Text></TabHeading>}>
            <Mining />
          </Tab>
          <Tab heading={ <TabHeading><Text>Exchange</Text></TabHeading>}>
            <Exchange />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}