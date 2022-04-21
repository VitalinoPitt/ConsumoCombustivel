import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Calculo from './src/pages/Calculo';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{headerTintColor:"#fcfcfc",headerStyle: {backgroundColor:"black"}}}
      >
        
      <Stack.Screen 
        name='Consumo Médio de Combustível'
        component={Home}
      />
      <Stack.Screen 
        name='Cálculo'
        component={Calculo}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;