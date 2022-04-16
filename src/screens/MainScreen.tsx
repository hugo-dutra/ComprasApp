import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native'
import React from 'react'
import { View, Text, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListaScreen from './ListaScreen';
import EstabelecimentoScreen from './EstabelecimentoScreen';
import ComprasScreen from './ComprasScreen';
import ProdutoScreen from './ProdutoScreen';
import GraficoScreen from './GraficoScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const MainScreen: React.FC<{ route: RouteProp<ParamListBase, "MainScreen">, navigation: any }> = (props) => {
  return (
    < View style={{ flex: 1, height: Dimensions.get("screen").height }} >
      {/* <Text onPress={() => { props.navigation.navigate("LoginScreen") }}>MainScreen</Text> */}
      <Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Screen name='ListaScreen'>
          {props => <ListaScreen {...props}></ListaScreen>}
        </Screen>
        <Screen name='EstabelecimentoScreen' >
          {props => <EstabelecimentoScreen {...props}></EstabelecimentoScreen>}
        </Screen>
        <Screen name='ComprasScreen' >
          {props => <ComprasScreen {...props}></ComprasScreen>}
        </Screen>
        <Screen name='ProdutoScreen' >
          {props => <ProdutoScreen {...props}></ProdutoScreen>}
        </Screen>
        <Screen name='GraficoScreen'  >
          {props => <GraficoScreen {...props}></GraficoScreen>}
        </Screen>
      </Navigator>
    </View >
  )
}

export default MainScreen
