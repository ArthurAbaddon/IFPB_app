import React from 'react';
import { StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home  from './src/screens/Home';
import  Aprendizagem  from './src/screens/Aprendizagem';
import Desempenho from './src/screens/Desempenho';
import { RootStackParamList } from './src/@types/rootstack';
import { styles, navigator} from './src/styles/styles';
import LogoTitle from './src/styles/logo';
import Dashboard from './src/screens/Dashboard';

const Stack  = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
     <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#101545" translucent={true} />
      <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
              headerStyle: navigator.headernavigator, // Cor de fundo do cabeçalho
              headerTintColor: '#F0F0F0',
              headerTitleStyle: navigator.headertextstyle, // Estilo do título
              headerTitle: (props) => <LogoTitle/>,
              headerTitleAlign: 'center',
          }}   
      >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Aprendizagem" component={Aprendizagem} />
          <Stack.Screen name="Desempenho" component={Desempenho} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

