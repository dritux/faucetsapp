import React, { Component } from 'react';
import { Text, Linking } from 'react-native';
import { Container, Button, View } from 'native-base';

const LinkButton = (props) => {
  return (
    <Button title="Click me" onPress={ ()=>{ Linking.openURL(props.siteUrl)}} light>
      <Text> SIGUP </Text>
    </Button>
  );
};
export default LinkButton;
