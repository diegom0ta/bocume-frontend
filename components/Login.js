import React from 'react';
import {
	View,
	StyleSheet,
	SafeAreaView,
	Text,
	TextInput,
	Button
} from 'react-native';

export default function Login() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.textLogin}>Já é nosso usuário?</Text>
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
					// onChangeText={(text) => setText(text)}
					// defaultValue={text}
				/>
				<Button
					onPress={() => {
						alert('You tapped the button!');
					}}
					title='Entrar'
					color='#ffb300'
				/>
			</View>
			<View style={styles.buttonArea}></View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 1000,
		backgroundColor: '#7a0c0c'
	},
	loginArea: {
		alignItems: 'center',
		justifyContent: 'space-evenly',
		flex: 3,
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
		flex: 1,
		flexDirection: 'row'
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
