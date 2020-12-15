import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Login from './components/Login';
import RegisterUser from './components/RegisterUser';
import Map from './components/Map';
import Marmitaria from './components/Marmitaria';
import Purchase from './components/Purchase';
import Confirm from './components/Confirm';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen name='Inicio' component={Home} />
				<Stack.Screen name='Entrar' component={Login} />
				<Stack.Screen name='Registrar' component={RegisterUser} />
				<Stack.Screen name='Localizar' component={Map} />
				<Stack.Screen name='Marmitaria' component={Marmitaria} />
				<Stack.Screen name='Pedido' component={Purchase} />
				<Stack.Screen name='Confirmar' component={Confirm} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
