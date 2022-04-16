import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListaScreen from './ListaScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const MainScreen: React.FC<{ route: RouteProp<ParamListBase, "MainScreen">, navigation: any }> = (props) => {
  return (
    <NavigationContainer>
      <Screen name='Listas' component={ListaScreen}></Screen>
      <Screen name='Estabelecimentos' component={ListaScreen}></Screen>
      <Screen name='Compras' component={ListaScreen}></Screen>
      <Screen name='Produtos' component={ListaScreen}></Screen>
      <Screen name='Graficos' component={ListaScreen}></Screen>
      <View>
        <Text onPress={() => { props.navigation.navigate("LoginScreen") }}>MainScreen</Text>
      </View>
    </NavigationContainer>
  )
}

export default MainScreen