import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavi from './navigators/AppNavi';

export default function App() {

  return (
    <NavigationContainer>
      <AppNavi />
    </NavigationContainer>
    
  );
}