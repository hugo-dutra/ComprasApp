import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native'
import React, { ReactNode, useEffect, useLayoutEffect } from 'react'
import { View, Text, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListaScreen from './ListaScreen';
import EstabelecimentoScreen from './EstabelecimentoScreen';
import ComprasScreen from './ComprasScreen';
import ProdutoScreen from './ProdutoScreen';
import GraficoScreen from './GraficoScreen';
import { MaterialIcons } from '@expo/vector-icons';
import TabNavitatorHeader from '../components/TabNavigatorHeader/TabNavitatorHeader';
import GlobalStyles from '../themes/styles';
import { IconProps } from '@expo/vector-icons/build/createIconSet';

const { Navigator, Screen } = createBottomTabNavigator();

const MainScreen: React.FC<{ route: RouteProp<ParamListBase, "MainScreen">, navigation: any }> = (props) => {
  const handleLoginNavigation = () => {
    props.navigation.navigate("LoginScreen");
  }


  return (
    < View style={{ flex: 1, height: Dimensions.get("screen").height }} >
      <Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: GlobalStyles.TabBarStyle,
          headerRight: () => <TabNavitatorHeader handleLoginNavigation={handleLoginNavigation} />,
          tabBarStyle: GlobalStyles.TabBarStyle,
          tabBarShowLabel: true,
          headerTitle: '',
          tabBarActiveTintColor: "#FFFFFF",
          tabBarInactiveTintColor: "#FFFFFF",
          tabBarActiveBackgroundColor: "#9B40BF",
          tabBarInactiveBackgroundColor: "#313131"
        }} >
        <Screen name='Lista' options={{
          tabBarIcon: () => { return <MaterialIcons name="mode-edit" size={25} style={GlobalStyles.TabBarButtons} />; }
        }}>
          {props => <ListaScreen {...props}></ListaScreen>}
        </Screen>

        <Screen name='Estabelecimento' options={{
          tabBarIcon: () => { return <MaterialIcons name="pin-drop" size={25} style={GlobalStyles.TabBarButtons} />; }
        }} >
          {props => <EstabelecimentoScreen {...props}></EstabelecimentoScreen>}
        </Screen>

        <Screen name='Compras' options={{
          tabBarIcon: () => { return <MaterialIcons name="shopping-cart" size={25} style={GlobalStyles.TabBarButtons} />; }
        }}
        >
          {props => <ComprasScreen {...props}></ComprasScreen>}
        </Screen >

        <Screen name='Produto' options={{
          tabBarIcon: () => { return <MaterialIcons name="cake" size={25} style={GlobalStyles.TabBarButtons} />; }
        }}>
          {props => <ProdutoScreen {...props}></ProdutoScreen>}
        </Screen>

        <Screen name='Grafico' options={{
          tabBarIcon: () => { return <MaterialIcons name="pie-chart" size={25} style={GlobalStyles.TabBarButtons} />; }
        }} >
          {props => <GraficoScreen {...props}></GraficoScreen>}
        </Screen>
      </Navigator>
    </View >
  )
}

export default MainScreen
