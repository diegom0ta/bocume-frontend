import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	SafeAreaView,
	Text,
	TextInput,
	Button,
	Image
} from 'react-native';
import api from '../api/api';

export default function Login({ navigation }) {
	const [username, setUsername] = useState({});
	const [password, setPassword] = useState({});
	const [dataResponse, setDataResponse] = useState({});

	function authUser(username, password) {
		api
			.post('/users/login', {
				username,
				password
			})
			.then(function (response) {
				setDataResponse(response);
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	function _handleLogin() {
		authUser(username, password);

		if (dataResponse.success) {
			navigation.navigate('Localizar');
		} else {
			alert('Usuário e/ou senha incorreto(s)!');
		}
		console.log('data', dataResponse);
	}

	const arrLogin = ['motadiego98@gmail.com', 'projetogrowing@gmail.com'];

	function login(username) {
		const result = arrLogin.find((un) => username === un);
		if (username !== result) {
			alert('Usuário e/ou senha incorreto(s)!');
		} else {
			navigation.navigate('Localizar');
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.logoArea}>
				<Image
					source={require('../assets/logo.png')}
					style={{ width: 200, height: 66, resizeMode: 'stretch' }}
				/>
			</View>
			<View style={styles.loginArea}>
				<TextInput
					style={styles.textInput}
					placeholder='Digite seu email'
					onChangeText={(un) => setUsername(un)}
				/>
				<TextInput
					style={styles.textInput}
					placeholder='Digite sua senha'
					secureTextEntry={true}
					onChangeText={(pwd) => setPassword(pwd)}
				/>
			</View>
			<View style={styles.buttonArea}>
				<Button
					onPress={() => login(username, password)}
					title='Entrar'
					color='#ffb300'
				/>
				<Button
					onPress={() => navigation.navigate('Registrar')}
					title='Ainda não é cliente? Cadastre-se'
					color='#ffb300'
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 828,
		backgroundColor: '#7a0c0c'
	},
	logoArea: {
		marginTop: 50,
		justifyContent: 'center',
		flex: 1,
		flexDirection: 'row'
	},
	loginArea: {
		alignItems: 'center',
		justifyContent: 'space-evenly',
		flex: 4,
		flexDirection: 'column',
		direction: 'rtl',
		flexWrap: 'nowrap'
	},
	textInput: {
		borderRadius: 20,
		borderWidth: 3,
		width: 250,
		height: 50,
		backgroundColor: 'white',
		borderColor: '#ffb300'
	},
	buttonArea: {
		margin: 50,
		justifyContent: 'center',
		flex: 2,
		flexDirection: 'column'
	}
});
