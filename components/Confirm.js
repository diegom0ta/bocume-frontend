import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Button,
	Image
} from 'react-native';
import { Card } from 'react-native-elements';
import { Checkbox } from 'react-native-paper';

export default function Confirm({ navigation }) {
	const [checked1, setChecked1] = useState(false);
	const [checked2, setChecked2] = useState(false);
	const [checked3, setChecked3] = useState(false);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.logoArea}>
				<Image
					source={require('../assets/marmitaria.jpg')}
					style={{
						borderRadius: 20,
						width: 150,
						height: 150,
						resizeMode: 'stretch'
					}}
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
					<Card.Title style={{ fontSize: 22 }}>Cestinha</Card.Title>
					<Text style={styles.textArea}>Frango assado........R$ 12,00</Text>
					<Text style={styles.textArea}>Bife acebolado.......R$ 13,00</Text>
					<Text style={styles.textArea}>
						Total........................R$ 25,00
					</Text>
				</Card>
			</View>
			<View style={styles.payArea}>
				<Checkbox
					color='#ffb300'
					status={checked1 ? 'checked' : 'unchecked'}
					onPress={() => {
						setChecked1(!checked1);
					}}
				/>
				<Text
					onPress={() => {
						setChecked1(!checked1);
					}}
					style={styles.label}
				>
					Débito
				</Text>
				<Checkbox
					color='#ffb300'
					status={checked2 ? 'checked' : 'unchecked'}
					onPress={() => {
						setChecked2(!checked2);
					}}
				/>
				<Text
					onPress={() => {
						setChecked2(!checked2);
					}}
					style={styles.label}
				>
					Crédito
				</Text>
				<Checkbox
					color='#ffb300'
					status={checked3 ? 'checked' : 'unchecked'}
					onPress={() => {
						setChecked3(!checked3);
					}}
				/>
				<Text
					onPress={() => {
						setChecked3(!checked3);
					}}
					style={styles.label}
				>
					Dinheiro
				</Text>
			</View>
			<View style={styles.buttonArea}>
				<Button
					onPress={() => navigation.navigate('')}
					title='Confirmar pedido'
					color='#ffb300'
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 828,
		backgroundColor: '#7a0c0c',
		flex: 4,
		flexDirection: 'column'
	},
	logoArea: {
		marginTop: 20,
		justifyContent: 'center',
		flex: 1,
		flexDirection: 'row'
	},
	infoArea: {
		justifyContent: 'center',
		flex: 1,
		flexDirection: 'row'
	},
	payArea: {
		marginTop: 100,
		alignItems: 'center',
		flex: 1,
		flexDirection: 'row'
	},
	textArea: {
		fontSize: 18,
		margin: 20
	},
	label: {
		color: '#ffffff',
		fontSize: 18
	},
	buttonArea: {
		margin: 20,
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		flexDirection: 'row'
	}
});
