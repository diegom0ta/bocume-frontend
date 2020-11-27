import axios from 'react-native-axios';

const api = axios.create({
	baseURL: 'http://192.168.0.100:3001'
});

export default api;
