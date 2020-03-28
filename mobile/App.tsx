import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


// import { Container } from './styles';
import Incidents from './src/pages/Incidents/index.js';
import Details from './src/pages/Details/index.js'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Incidents" component={Incidents} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}