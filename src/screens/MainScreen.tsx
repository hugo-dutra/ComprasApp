import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native'
import React from 'react'
import { View, Text, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListaScreen from './ListaScreen';
import EstabelecimentoScreen from './EstabelecimentoScreen';
import ComprasScreen from './ComprasScreen';
import ProdutoScreen from './ProdutoScreen';
import GraficoScreen from './GraficoScreen';
import { Feather } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

const MainScreen: React.FC<{ route: RouteProp<ParamListBase, "MainScreen">, navigation: any }> = (props) => {
  return (
    < View style={{ flex: 1, height: Dimensions.get("screen").height }} >
      {/* <Text onPress={() => { props.navigation.navigate("LoginScreen") }}>MainScreen</Text> */}
      <Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Screen name='Lista' options={{
          tabBarIcon: () => { return <Feather name="edit" size={25} color="#000" />; }
        }}>
          {props => <ListaScreen {...props}></ListaScreen>}
        </Screen>

        <Screen name='Estabelecimento' options={{
          tabBarIcon: () => { return <Feather name="map-pin" size={25} color="#000" />; }
        }} >
          {props => <EstabelecimentoScreen {...props}></EstabelecimentoScreen>}
        </Screen>

        <Screen name='Compras' options={{
          tabBarIcon: () => { return <Feather name="shopping-cart" size={25} color="#000" />; }
        }}
        >
          {props => <ComprasScreen {...props}></ComprasScreen>}
        </Screen >

        <Screen name='Produto' options={{
          tabBarIcon: () => { return <Feather name="coffee" size={25} color="#000" />; }
        }}>
          {props => <ProdutoScreen {...props}></ProdutoScreen>}
        </Screen>

        <Screen name='Grafico' options={{
          tabBarIcon: () => { return <Feather name="pie-chart" size={25} color="#000" />; }
        }} >
          {props => <GraficoScreen {...props}></GraficoScreen>}
        </Screen>
      </Navigator>
    </View >
  )
}

export default MainScreen
