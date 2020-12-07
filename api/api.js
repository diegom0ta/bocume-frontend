import axios from 'react-native-axios';

const api = axios.create({
	baseURL: 'https://192.168.0.100:443'
});

export default api;
