import { ParamListBase, RouteProp } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Text, View } from 'react-native'

const GraficoScreen: React.FC<{ route: RouteProp<ParamListBase, "Grafico">, navigation: any }> = props => {
  return (
    <View style={{ backgroundColor: '#0000ff', height: Dimensions.get("screen").height }}>
      <Text>GraficoScreen</Text>
    </View>
  )
}

export default GraficoScreen