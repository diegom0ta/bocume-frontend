import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = () => {
	const GOOGLE_MAPS_APIKEY = 'AIzaSyAXc_xbcIbeW9lrBANB0p0s0CZCSsG100I';

	return (
		<View style={styles.container}>
			<MapView
				provider={GOOGLE_MAPS_APIKEY}
				style={styles.map}
				loadingEnabled={true}
				region={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.015,
					longitudeDelta: 0.0121
				}}
			>
				<Marker
					coordinate={{
						latitude: 37.78825,
						longitude: -122.4324,
						latitudeDelta: 0.015,
						longitudeDelta: 0.0121
					}}
					title={'Marcador'}
					description={'Testando o marcador no mapa'}
				/>
			</MapView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	map: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}
});

export default Map;
