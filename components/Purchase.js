import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Button,
	Image
} from 'react-native';
import { Checkbox } from 'react-native-paper';

export default function Purchase({ navigation }) {
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
			<View style={styles.askContainer}>
				<View style={styles.askArea}>
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
						Frango assado.................R$ 12,00
					</Text>
				</View>
				<View style={styles.subAskArea}>
					<Text style={styles.subLabel}>
						Arroz branco, purê, farofa e vinagrete
					</Text>
				</View>
				<View style={styles.askArea}>
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
						Bife acebolado.................R$ 13,00
					</Text>
				</View>
				<View style={styles.subAskArea}>
					<Text style={styles.subLabel}>
						Arroz branco, feijão, farofa e vinagrete
					</Text>
				</View>
				<View style={styles.askArea}>
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
						Peixe frito..........................R$ 14,00
					</Text>
				</View>
				<View style={styles.subAskArea}>
					<Text style={styles.subLabel}>
						Baião de dois, farofa de ovos e vinagrete
					</Text>
				</View>
			</View>
			<View style={styles.buttonArea}>
				<Button
					onPress={() => navigation.navigate('Confirmar')}
					title='Finalizar pedido'
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
		flex: 3,
		flexDirection: 'column'
	},
	logoArea: {
		marginTop: 20,
		justifyContent: 'center',
		flex: 1,
		flexDirection: 'row'
	},
	askContainer: {
		marginTop: 80,
		alignItems: 'baseline',
		flex: 6,
		flexDirection: 'column'
	},
	askArea: {
		alignItems: 'center',
		alignContent: 'space-around',
		flex: 3,
		flexDirection: 'row'
	},
	label: {
		color: '#ffffff',
		fontSize: 24
	},
	subAskArea: {
		marginLeft: 50,
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		flexDirection: 'row'
	},
	subLabel: {
		color: '#ffffff',
		fontSize: 16,
		fontStyle: 'italic'
	},
	buttonArea: {
		margin: 20,
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		flexDirection: 'row'
	}
});
