import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Button,
	Image
} from 'react-native';

export default function Home({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.textWelcome}>Seja Bem-Vindo!</Text>
			</View>
			<View style={styles.logoArea}>
				<Image
					source={require('../assets/logo.png')}
					style={{ width: 300, height: 100, resizeMode: 'stretch' }}
				/>
			</View>
			<View style={styles.buttonArea}>
				<Button
					onPress={() => navigation.navigate('Login')}
					title='Começar'
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
	buttonArea: {
		margin: 20,
		justifyContent: 'center',
		flex: 1,
		flexDirection: 'row'
	},
	textWelcome: {
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold'
	},
	header: {
		justifyContent: 'center',
		flex: 1,
		flexDirection: 'row'
	}
});
