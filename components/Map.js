import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Alert,
	SafeAreaView,
	FlatList,
	TouchableOpacity
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import DATA from '../api/data';

export default function Map({ navigation }) {
	const [position, setPosition] = useState({
		latitude: -3.74772,
		longitude: -38.49666,
		latitudeDelta: 0.015,
		longitudeDelta: 0.0121
	});

	function getLocationPermission() {
		request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
			.then((result) => {
				if (result === RESULTS.GRANTED) {
					Geolocation.getCurrentPosition(
						(pos) => {
							setPosition({});
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

	const Item = ({ name, distance, id, desc, addr }) => (
		<TouchableOpacity
			onPress={() => {
				navigation.navigate('Marmitaria', {
					itemId: id,
					itemName: name,
					itemDist: distance,
					itemDesc: desc,
					itemAddr: addr
				});
			}}
			style={styles.item}
		>
			<Text style={styles.itemText}>{name}</Text>
			<Text style={styles.itemText}>{distance}</Text>
		</TouchableOpacity>
	);

	const renderItem = ({ item }) => (
		<Item name={item.name} distance={item.distance} />
	);

	useEffect(() => {
		// getLocationPermission();
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
			<FlatList
				data={DATA}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>
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
	},
	item: {
		margin: 50
	},
	itemText: {
		color: '#ffffff',
		fontWeight: 'bold',
		fontSize: 18
	}
});
