import React from 'react';
import {
	View,
	StyleSheet,
	SafeAreaView,
	Text,
	TextInput,
	Button,
	Image
} from 'react-native';

export default function Login({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.textLogin}>Já é nosso usuário?</Text>
			</View>
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
					// onChangeText={(text) => setText(text)}
					// defaultValue={text}
				/>
				<TextInput
					style={styles.textInput}
					placeholder='Digite sua senha'
					secureTextEntry={true}
					// onChangeText={(text) => setText(text)}
					// defaultValue={text}
				/>
			</View>
			<View style={styles.buttonArea}>
				<Button
					onPress={() => {
						alert('You tapped the button!');
					}}
					title='Entrar'
					color='#ffb300'
				/>
				<Button
					onPress={() => navigation.navigate('RegisterUser')}
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
		width: 250,
		height: 50,
		backgroundColor: 'white',
		borderColor: '#ffb300',
		borderWidth: 1
	},
	buttonArea: {
		margin: 20,
		justifyContent: 'center',
		flex: 2,
		flexDirection: 'column'
	},
	textLogin: {
		color: 'white',
		fontSize: 20
	},
	header: {
		justifyContent: 'center',
		flex: 1,
		flexDirection: 'row'
	}
});
