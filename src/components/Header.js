import React, { Fragment } from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';
import { Header, Body, Title, Subtitle, Left, Right} from 'native-base';

const Home = () => null;
const Messages = () => null;
const Notification = () => null;

const TitleHeader = ({ title }) => {
  return (
      <Header hasTabs>
        <Body>
          <Title style={styles.title}>Top Paying Faucets List</Title>
          <Subtitle style={styles.subtitle}>All top paying faucets in 1 place!</Subtitle>
        </Body>
      </Header>
  );
}

const styles = StyleSheet.create({
    title: {
        marginLeft: 60,
    },
    subtitle: {
        marginLeft: 60,
    },
});

export default TitleHeader