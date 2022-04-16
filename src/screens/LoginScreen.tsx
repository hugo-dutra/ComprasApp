import React from 'react'
import { View, Text, Button, Dimensions } from 'react-native';
import { ParamListBase, RouteProp } from '@react-navigation/native';

const LoginScreen: React.FC<{ route: RouteProp<ParamListBase, "Login">, navigation: any }> = (props) => {
  return (
    <View style={{ backgroundColor: "#ff00ff", height: Dimensions.get("screen").height }}>
      <Text onPress={() => props.navigation.navigate("MainScreen")}>LoginScreen</Text>
    </View>

  )
}

export default LoginScreen