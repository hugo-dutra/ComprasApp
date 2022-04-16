import { ParamListBase, RouteProp } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Text, View } from 'react-native'

const EstabelecimentoScreen: React.FC<{ route: RouteProp<ParamListBase, "EstabelecimentoScreen">, navigation: any }> = props => {
  return (
    <View style={{ backgroundColor: '#00ff00', height: Dimensions.get("screen").height }}>
      <Text>EstabelecimentoScreen</Text>
    </View>
  )
}

export default EstabelecimentoScreen