import React from 'react'
import { ParamListBase, RouteProp } from '@react-navigation/native'
import { Text, View } from 'react-native'
import GlobalStyles from '../themes/styles'

const ProdutoScreen: React.FC<{ route: RouteProp<ParamListBase, "Produto">, navigation: any }> = props => {
  return (
    <View style={GlobalStyles.ScreenContainer}>
      <Text
        style={GlobalStyles.ScreenContainer}
      >
        Produto Screen
      </Text>
    </View>
  )
}

export default ProdutoScreen