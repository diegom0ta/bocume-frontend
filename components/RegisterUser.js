import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	SafeAreaView,
	Text,
	TextInput,
	Button
} from 'react-native';

export default function RegisterUser() {
	const [firstname, setFirstname] = useState({});
	const [lastname, setLastname] = useState({});
	const [username, setUsername] = useState({});

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.textInfo}>Informe seus dados:</Text>
			</View>
			<View style={styles.registerArea}>
				<Text style={styles.textUser}>Nome</Text>
				<TextInput
					style={styles.textInput}
					placeholder='Ex. João'
					onChangeText={(fn) => setFirstname(fn)}
				/>
				<Text style={styles.textUser}>Sobrenome</Text>
				<TextInput
					style={styles.textInput}
					placeholder='Ex. Silva'
					onChangeText={(ln) => setLastname(ln)}
				/>
				<Text style={styles.textUser}>E-mail</Text>
				<TextInput
					style={styles.textInput}
					placeholder='Ex. joaosilva@email.com'
					// onChangeText={(text) => setText(text)}
					// defaultValue={text}
				/>
				<Text style={styles.textUser}>Telefone</Text>
				<TextInput
					style={styles.textInput}
					placeholder='Ex. 85 99999-0000'
					secureTextEntry={true}
					// onChangeText={(text) => setText(text)}
					// defaultValue={text}
				/>
				<Text style={styles.textUser}>Senha</Text>
				<TextInput
					style={styles.textInput}
					placeholder='Ex. 85 99999-0000'
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
					title='Cadastrar'
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
	registerArea: {
		alignItems: 'center',
		justifyContent: 'space-evenly',
		flex: 11,
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
	textInfo: {
		color: 'white',
		fontSize: 20
	},
	textUser: {
		color: 'white',
		fontSize: 14
	},
	header: {
		justifyContent: 'center',
		flex: 1,
		flexDirection: 'row'
	}
});
