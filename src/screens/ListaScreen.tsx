import { ParamListBase, RouteProp } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Text, View } from 'react-native'

const ListaScreen: React.FC<{ route: RouteProp<ParamListBase, "Lista">, navigation: any }> = props => {
  return (
    <View style={{ backgroundColor: '#00ffff', height: Dimensions.get("screen").height }}>
      <Text>Lista Screen</Text>
    </View>
  )
}

export default ListaScreen