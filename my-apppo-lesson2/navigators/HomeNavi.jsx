import React from 'react';
import Home from '../screen/Home';
import MyPage from '../screen/MyPage';
import { View , Text , Image , Platform , StatusBar } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 

const BottomTab = createBottomTabNavigator();

export default function HomeNavi(props) {
  //
  return (
    <React.Fragment>
      <View style={
        { marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0 }
      }>
        <Image source={require('../assets/logo.png')} />
      </View>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'ホーム',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }} />
        <BottomTab.Screen name="MyPage" component={MyPage} options={{
          tabBarLabel: 'マイページ',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}/>
      </BottomTab.Navigator>
    </React.Fragment>
    
  );
}
