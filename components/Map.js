import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Map = () => {
	const [position, setPosition] = useState({
		latitude: 37.78825,
		longitude: -122.4324,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421
	});

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
};

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

export default Map;
