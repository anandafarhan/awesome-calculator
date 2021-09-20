import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { extendTheme, NativeBaseProvider } from 'native-base';

import AppNavigator from './src/components/AppNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
	const theme = extendTheme({
		colors: {
			// Add new color
			primary: {
				50: '#e06060',
				100: '#e06060',
				200: '#e06060',
				300: '#e06060',
				400: '#ff5757',
				500: '#ff5757',
				600: '#db7070',
				700: '#db7070',
				800: '#db7070',
				900: '#db7070',
			},
			darkPrimary: {
				50: '#e06060',
				100: '#e06060',
				200: '#e06060',
				300: '#e06060',
				400: '#930707',
				500: '#930707',
				600: '#ff5757',
				700: '#ff5757',
				800: '#ff5757',
				900: '#ff5757',
			},
		},
		config: {
			initialColorMode: 'dark',
		},
	});
	return (
		<NativeBaseProvider theme={theme}>
			<StatusBar backgroundColor={'white'} />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name='Home' component={AppNavigator} />
				</Stack.Navigator>
			</NavigationContainer>
		</NativeBaseProvider>
	);
}
