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

export default function Marmitaria({ route, navigation }) {
	const { itemId, itemName, itemDist, itemDesc, itemAddr } = route.params;
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.logoArea}>
				<Image
					source={require('../assets/marmitaria.jpg')}
					style={{
						borderRadius: 20,
						width: 200,
						height: 200,
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
					<Card.Title style={{ fontSize: 22 }}>{itemName}</Card.Title>
					<Text style={styles.textArea}>{itemDesc}</Text>
					<Text style={styles.textArea}>{itemAddr}</Text>
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
