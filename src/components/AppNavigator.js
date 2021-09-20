import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

import SimpleCalculator from '../views/SimpleCalculator';
import AwesomeCalculator from '../views/AwesomeCalculator';
import Styles from '../styles/_global';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
	return (
		<Tab.Navigator
			initialRouteName='SimpleCalculator'
			sceneContainerStyle={{
				backgroundColor: Styles.primary,
			}}
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarActiveTintColor: 'tomato',
				tabBarInactiveTintColor: 'black',
				tabBarHideOnKeyboard: true,
				tabBarLabelStyle: { fontSize: 13 },
				tabBarStyle: {
					height: 65,
					position: 'absolute',
				},
				tabBarIcon: ({ focused, color, size }) => {
					if (route.name === 'SimpleCalculator') {
						return <SimpleLineIcons name='calculator' size={size} color={color} />;
					} else if (route.name === 'AwesomeCalculator') {
						return (
							<Ionicons
								name={focused ? 'ios-calculator' : 'ios-calculator-outline'}
								size={size}
								color={color}
							/>
						);
					}
				},
			})}
		>
			<Tab.Screen
				name='SimpleCalculator'
				component={SimpleCalculator}
				options={{ title: 'Simple Calculator' }}
			/>
			<Tab.Screen
				name='AwesomeCalculator'
				component={AwesomeCalculator}
				options={{ title: 'Awesome Calculator' }}
			/>
		</Tab.Navigator>
	);
}
