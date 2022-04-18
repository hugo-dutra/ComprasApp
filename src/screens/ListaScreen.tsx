import { ParamListBase, RouteProp } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import GlobalStyles from '../themes/styles'

const ListaScreen: React.FC<{ route: RouteProp<ParamListBase, "Lista">, navigation: any }> = props => {
  return (
    <View style={GlobalStyles.ScreenContainer}>
      <Text
        style={GlobalStyles.ScreenContainer}
      >

      </Text>
    </View>
  )
}

export default ListaScreen