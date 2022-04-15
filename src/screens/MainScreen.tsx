import { ParamListBase, RouteProp } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button } from 'react-native';

const MainScreen: React.FC<{ route: RouteProp<ParamListBase, "MainScreen">, navigation: any }> = (props) => {
  return (
    <View>
      <Text onPress={() => { props.navigation.navigate("LoginScreen") }}>MainScreen</Text>
    </View>
  )
}

export default MainScreen