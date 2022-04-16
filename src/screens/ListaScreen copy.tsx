import { ParamListBase, RouteProp } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'

const ListaScreen: React.FC<{ route: RouteProp<ParamListBase, "ListaScreen">, navigation: any }> = props => {
  return (
    <View style={{ backgroundColor: '#ffff00' }}>
      <Text>ListaScreen</Text>
    </View>
  )
}

export default ListaScreen