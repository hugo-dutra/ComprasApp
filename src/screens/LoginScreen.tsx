import React from 'react'
import { View, Text } from 'react-native';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import GlobalStyles from '../themes/styles';

const LoginScreen: React.FC<{ route: RouteProp<ParamListBase, "Login">, navigation: any }> = (props) => {
  return (
    <View style={GlobalStyles.ScreenContainer}>
      <Text style={GlobalStyles.ScreenContainer}
        onPress={() => props.navigation.navigate("MainScreen")}
      >
        LoginScreen
      </Text>
    </View>

  )
}

export default LoginScreen