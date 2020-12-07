import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Alert,
	Image,
	SafeAreaView,
	ScrollView
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { ListItem, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

export default function Map({ navigation }) {
	const [position, setPosition] = useState({});

	function getLocationPermission() {
		request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
			.then((result) => {
				if (result === RESULTS.GRANTED) {
					Geolocation.getCurrentPosition(
						(pos) => {
							setPosition({
								latitude: pos.coords.latitude,
								longitude: pos.coords.longitude,
								latitudeDelta: 0.015,
								longitudeDelta: 0.0121
							});
						},
						(error) => {
							console.log(error);
							Alert.alert('Houve um erro ao pegar a latitude e longitude.');
						}
					);
				} else {
					Alert.alert('Permissão de localização não concedida');
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	const avatar = require('../assets/logo.png');

	useEffect(() => {
		getLocationPermission();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.mapContainer}>
				<MapView
					style={styles.map}
					region={position}
					onPress={(e) =>
						setPosition({
							...position,
							latitude: e.nativeEvent.coordinate.latitude,
							longitude: e.nativeEvent.coordinate.longitude
						})
					}
				>
					<Marker
						coordinate={position}
						title={'Marcador'}
						description={'Você está aqui'}
					/>
				</MapView>
			</View>
			<ScrollView>
				<ListItem onPress={() => navigation.navigate('Marmitaria')}>
					<Avatar rounded title='TT' />
					<ListItem.Content>
						<ListItem.Title>Marmitaria XYZ</ListItem.Title>
						<ListItem.Subtitle>R$ 13,00</ListItem.Subtitle>
					</ListItem.Content>
				</ListItem>
				<ListItem>
					<Avatar rounded title='TT' />
					<ListItem.Content>
						<ListItem.Title>Marmitaria XYZ</ListItem.Title>
						<ListItem.Subtitle>R$ 13,00</ListItem.Subtitle>
					</ListItem.Content>
				</ListItem>
				<ListItem>
					<Avatar rounded title='TT' />
					<ListItem.Content>
						<ListItem.Title>Marmitaria XYZ</ListItem.Title>
						<ListItem.Subtitle>R$ 13,00</ListItem.Subtitle>
					</ListItem.Content>
				</ListItem>
				<ListItem>
					<Avatar rounded title='TT' />
					<ListItem.Content>
						<ListItem.Title>Marmitaria XYZ</ListItem.Title>
						<ListItem.Subtitle>R$ 13,00</ListItem.Subtitle>
					</ListItem.Content>
				</ListItem>
				<ListItem>
					<Avatar rounded title='TT' />
					<ListItem.Content>
						<ListItem.Title>Marmitaria XYZ</ListItem.Title>
						<ListItem.Subtitle>R$ 13,00</ListItem.Subtitle>
					</ListItem.Content>
				</ListItem>
				<ListItem>
					<Avatar rounded title='TT' />
					<ListItem.Content>
						<ListItem.Title>Marmitaria XYZ</ListItem.Title>
						<ListItem.Subtitle>R$ 13,00</ListItem.Subtitle>
					</ListItem.Content>
				</ListItem>
				<ListItem>
					<Avatar rounded title='TT' />
					<ListItem.Content>
						<ListItem.Title>Marmitaria XYZ</ListItem.Title>
						<ListItem.Subtitle>R$ 13,00</ListItem.Subtitle>
					</ListItem.Content>
				</ListItem>
				<ListItem>
					<Avatar rounded title='TT' />
					<ListItem.Content>
						<ListItem.Title>Marmitaria XYZ</ListItem.Title>
						<ListItem.Subtitle>R$ 13,00</ListItem.Subtitle>
					</ListItem.Content>
				</ListItem>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 828,
		backgroundColor: '#7a0c0c'
	},
	mapContainer: {
		position: 'relative',
		height: 500
	},
	map: {
		height: '100%',
		width: '100%'
	}
});
