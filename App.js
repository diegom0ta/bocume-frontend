import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Login from './components/Login';
import RegisterUser from './components/RegisterUser';
import Map from './components/Map';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='RegisterUser' component={RegisterUser} />
				<Stack.Screen name='Map' component={Map} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
