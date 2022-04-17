import { ParamListBase, RouteProp } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import GlobalStyles from '../themes/styles'

const EstabelecimentoScreen: React.FC<{ route: RouteProp<ParamListBase, "Estabelecimento">, navigation: any }> = props => {
  return (
    <View style={GlobalStyles.ScreenContainer}>
      <Text
        style={GlobalStyles.ScreenContainer}
      >
        EstabelecimentoScreen
      </Text>
    </View>
  )
}

export default EstabelecimentoScreen