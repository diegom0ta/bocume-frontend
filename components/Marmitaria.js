import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Button,
	Image
} from 'react-native';
import { Card } from 'react-native-elements';

export default function Marmitaria({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.logoArea}>
				<Image
					source={require('../assets/marmitaria.png')}
					style={{ width: 300, height: 150, resizeMode: 'stretch' }}
				/>
			</View>
			<View style={styles.infoArea}>
				<Card
					containerStyle={{
						borderRadius: 20,
						backgroundColor: '#fff5d1',
						width: 300,
						height: 300
					}}
				>
					<Card.Title style={{ fontSize: 22 }}>D'Casa Marmitaria</Card.Title>
					<Text style={styles.textArea}>
						Marmitaria especializada em comida caseira. Entregamos em domicílio
						e não cobramos taxa de entrega.
					</Text>
					<Text style={styles.textArea}>
						Rua Corornel Linhares, 1278 Bairro: Aldeota
					</Text>
				</Card>
			</View>
			<View style={styles.buttonArea}>
				<Button
					onPress={() => navigation.navigate('')}
					title='Pedir'
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
	infoArea: {
		justifyContent: 'center',
		flex: 1,
		flexDirection: 'row'
	},
	textArea: {
		fontSize: 18,
		margin: 20
	},
	buttonArea: {
		margin: 20,
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		flexDirection: 'row'
	}
});
