import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Platform,
} from 'react-native';
import { Card } from 'react-native-elements';

export default function NewsDetail(props) {
  //
  return (
    <View
      style={
        ([styles.container],
        { marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0 })
      }>
      <Card>
        <Card.Title>This is news (id:{props.route.params?.id})</Card.Title>
        <Card.Image
          source={{ uri: props.route.params.image}}></Card.Image>
        <Text>this is dummy content</Text>
        <Text>this is dummy content</Text>
        <Text>this is dummy content</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '80%',
  },
  textTaskListTitle: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 20,
    margin: 10,
    borderBottomWidth: 5,
    borderColor: 'gray',
  },
});
