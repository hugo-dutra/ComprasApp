import { ParamListBase, RouteProp } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import GlobalStyles from '../themes/styles'

const GraficoScreen: React.FC<{ route: RouteProp<ParamListBase, "Grafico">, navigation: any }> = props => {
  return (
    <View style={GlobalStyles.ScreenContainer}>
      <Text
        style={GlobalStyles.ScreenContainer}
      >
        GraficoScreen
      </Text>
    </View>
  )
}

export default GraficoScreen