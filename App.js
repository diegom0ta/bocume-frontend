import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Map from './components/Map';

export default function App() {
	return (
		<View>
			<Map />
			<StatusBar style='auto' />
		</View>
	);
}
