import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

export default function Map() {
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

	useEffect(() => {
		getLocationPermission();
	}, []);

	return (
		<View style={styles.container}>
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
	);
}

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		height: 500
	},
	map: {
		height: '100%',
		width: '100%'
	},
	logo: {
		backgroundColor: '#fff',
		borderRadius: 15,
		paddingHorizontal: 15,
		elevation: 5,
		marginTop: -730,
		alignSelf: 'center',
		marginRight: 10,
		flexDirection: 'row'
	},
	logoText: {
		fontWeight: 'bold',
		fontSize: 22
	},
	positonBox: {
		backgroundColor: '#fff',
		borderRadius: 20,
		opacity: 0.75,
		marginTop: -170,
		marginHorizontal: 40,
		padding: 25,
		shadowColor: '#000',
		elevation: 5
	},
	positonBoxTitle: {
		textAlign: 'center',
		fontSize: 22,
		fontWeight: 'bold',
		color: '#e74c3c'
	},
	positonBoxLatLon: { flexDirection: 'row', justifyContent: 'space-between' },
	locationButton: {
		backgroundColor: '#e74c3c',
		borderRadius: 150,
		marginTop: -25,
		width: 50,
		height: 50,
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		elevation: 8
	}
});
