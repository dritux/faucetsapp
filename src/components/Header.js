import React, { Fragment } from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';
import { 
    Container,
    Left,
    Right,
    Body,
    Title,
    Button,
    Icon,
    View,
    Fab,
    List,
    ListItem,
    Thumbnail,
    Text,
    Badge,
    Content,
    Tab,
    Tabs,
    TabHeading,
    Card,
    CardItem
} from 'native-base';

const Home = () => null;
const Messages = () => null;
const Notification = () => null;

const Header = ({ title }) => {
  return (
      <Container>
        <Header androidStatusBarColor="#573ea8" style={styles.header} hasTabs>
          <Left>
            <Text style={styles.logo}>Logo</Text>
          </Left>
          <Body>
            <Title>{title}</Title>
          </Body>
        </Header>
        <View style={styles.container}>
        <Tabs>
          <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="home" /></TabHeading>}>
            <Home />
          </Tab>
          <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="bell-o" /></TabHeading>}>
            <Notification />
          </Tab>
          <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="envelope-o" /></TabHeading>}>
            <Messages />
          </Tab>
        </Tabs>
        </View>
      </Container>
  );
}

const styles = StyleSheet.create({
    tabHeading: {
        backgroundColor: "#7159C1",
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        backgroundColor: "#7159C1",
    },
    container: {
        flex: 1,
    }
});

export default Header