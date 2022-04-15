import React from 'react'
import { View, Text, Button } from 'react-native';
import { NavigationContainer, ParamListBase, RouteProp, TabRouter } from '@react-navigation/native';

const LoginScreen: React.FC<{ route: RouteProp<ParamListBase, "LoginScreen">, navigation: any }> = (props) => {
  return (
    <View>
      <Text onPress={() => props.navigation.navigate("MainScreen")}>LoginScreen</Text>
    </View>

  )
}

export default LoginScreen