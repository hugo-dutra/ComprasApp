import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/MainScreen';

const { Navigator, Screen } = createNativeStackNavigator();

const App: React.FC = (props) => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Screen name='LoginScreen' >
          {props => <LoginScreen {...props}></LoginScreen>}
        </Screen>
        <Screen name="MainScreen">
          {props => <MainScreen {...props}></MainScreen>}
        </Screen>
      </Navigator>

    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
