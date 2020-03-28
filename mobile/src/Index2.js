import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

// import { Container } from './styles';
import Incidents from './pages/Incidents';
import Details from './pages/Details'

const AppStack = createStackNavigator();

function Routes() {
    return (
      <NavigationContainer>

        <AppStack.Navigator>
          <AppStack.Screen component={Incidents} />
          <AppStack.Screen component={Details} />
        </AppStack.Navigator>

      </NavigationContainer>
    );
}

export default Routes;