import { ParamListBase, RouteProp } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Text, View } from 'react-native'

const ComprasScreen: React.FC<{ route: RouteProp<ParamListBase, "ComprasScreen">, navigation: any }> = props => {
  return (
    <View style={{ backgroundColor: '#ff0000', height: Dimensions.get("screen").height }}>
      <Text>ComprasScreen</Text>
    </View>
  )
}

export default ComprasScreen