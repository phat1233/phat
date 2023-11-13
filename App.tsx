import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen';
import Name from './src/screen/Name';
import Email from './src/screen/email'

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="PassWord" component={Home} />
      <Stack.Screen name="name" component={Name}/>
    </Stack.Navigator>

      </NavigationContainer>
  )
}

export default App