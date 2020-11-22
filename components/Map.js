import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

export default function Map() {
	const [position, setPosition] = useState({});

	const regionFrom = (lat, lon, distance) => {
		distance = distance / 2;
		const circumference = 40075;
		const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
		const angularDistance = distance / circumference;

		const latitudeDelta = distance / oneDegreeOfLatitudeInMeters;
		const longitudeDelta = Math.abs(
			Math.atan2(
				Math.sin(angularDistance) * Math.cos(lat),
				Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat)
			)
		);

		return (result = {
			latitude: lat,
			longitude: lon,
			latitudeDelta,
			longitudeDelta
		});
	};

	const getLocationPermission = () => {
		request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
			.then((result) => {
				if (result === RESULTS.GRANTED) {
					Geolocation.getCurrentPosition(
						(pos) => {
							setPosition(
								regionFrom(pos.coords.latitude, pos.coords.longitude, 5)
							);
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
	};

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
					description={'Testando o marcador no mapa'}
				/>
			</MapView>
			<View style={styles.positonBox}>
				<Text style={styles.positonBoxTitle}>Sua Localização</Text>
				<View style={styles.positonBoxLatLon}>
					<Text style={{ fontSize: 18 }}>Lat.</Text>
					<Text style={{ fontSize: 18 }}>{position.latitude}</Text>
				</View>
				<View style={styles.positonBoxLatLon}>
					<Text style={{ fontSize: 18 }}>Lon.</Text>
					<Text style={{ fontSize: 18 }}>{position.longitude}</Text>
				</View>
			</View>
			<TouchableOpacity style={styles.locationButton} onPress={() => {}}>
				<Icon name='my-location' color={'#fff'} size={30} />
			</TouchableOpacity>
			<View style={styles.logo}>
				<Text style={styles.logoText}>Samurai</Text>
				<Text style={[styles.logoText, { color: '#e74c3c' }]}>Map</Text>
			</View>
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
