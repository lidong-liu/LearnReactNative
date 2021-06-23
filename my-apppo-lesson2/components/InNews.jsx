import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  StatusBar,
  Platform,
} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

//dummy data
const list = [
  {
    id: 1001,
    title: '習近平総書記が神舟12号の宇宙飛行士とテレビ会議の形式で会話',
    image: 'https://picsum.photos/seed/picsum/200/300',
  },
  {
    id: 2001,
    title: '習近平総書記が神舟12号の宇宙飛行士とテレビ会議の形式で会話',
    image: 'https://picsum.photos/seed/picsum/200/300',
  },
  {
    id: 3001,
    title: '習近平総書記が神舟12号の宇宙飛行士とテレビ会議の形式で会話',
    image: 'https://picsum.photos/seed/picsum/200/300',
  },
  {
    id: 4001,
    title: '習近平総書記が神舟12号の宇宙飛行士とテレビ会議の形式で会話',
    image: 'https://picsum.photos/seed/picsum/200/300',
  },
  {
    id: 5001,
    title: '習近平総書記が神舟12号の宇宙飛行士とテレビ会議の形式で会話',
    image: 'https://picsum.photos/seed/picsum/200/300',
  },
  {
    id: 6001,
    title: '習近平総書記が神舟12号の宇宙飛行士とテレビ会議の形式で会話',
    image: 'https://picsum.photos/seed/picsum/200/300',
  }
];

export default function InNews(props) {
  //
  return (
    <View
      style={
        ([styles.container],
        { marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0 })
      }>
      <ScrollView>
        {list.map((item, index) => (
          <ListItem
            key={index}
            bottomDivider
            onPress={() =>
              props.navigation.navigate('NewsDetail', {image: item.image})
            }>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <Avatar source={{ uri: item.image }} />
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
