import React from 'react';
import { VStack, HStack } from 'native-base';
import { View, Text } from 'react-native';

import CustomButton from '../components/CustomButton';
import CustomNumberInput from '../components/CustomNumberInput';

export default function SimpleCalculator({ navigation }) {
	const [valueA, setValueA] = React.useState(0);
	const [valueB, setValueB] = React.useState(0);
	const [result, setResult] = React.useState(0);

	function handleCalculate(operator) {
		switch (operator) {
			case '+':
				return setResult(parseInt(valueA) + parseInt(valueB));
			case '-':
				return setResult(parseInt(valueA) - parseInt(valueB));
			case '*':
				return setResult(parseInt(valueA) * parseInt(valueB));
			case '/':
				return setResult(parseInt(valueA) / parseInt(valueB));
			case '%':
				return setResult(parseInt(valueA) % parseInt(valueB));
			default:
				return setResult('invalid operator');
		}
	}

	return (
		<VStack space={4} w='100%' px={10} pt={10}>
			<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Calculator</Text>
			<Text style={{ paddingLeft: 5, fontWeight: 'bold' }}>Value A</Text>
			<CustomNumberInput setValue={(value) => setValueA(value)} value={valueA} />
			<Text style={{ paddingLeft: 5, fontWeight: 'bold' }}>Value B</Text>
			<CustomNumberInput setValue={(value) => setValueB(value)} value={valueB} />
			<Text style={{ paddingLeft: 5, fontWeight: 'bold' }}>Result</Text>
			<View
				style={{
					backgroundColor: '#eaeaea',
					padding: 10,
					borderRadius: 5,
					minHeight: '8%',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text>{result}</Text>
			</View>
			<HStack alignItems='center' justifyContent='space-between' pt={5}>
				<CustomButton onPress={() => handleCalculate('+')} size={20} title='+' />
				<CustomButton onPress={() => handleCalculate('-')} size={20} title='-' />
				<CustomButton onPress={() => handleCalculate('*')} size={20} title='*' />
			</HStack>
			<HStack alignItems='center' justifyContent='space-evenly' pt={5}>
				<CustomButton onPress={() => handleCalculate('/')} size={20} title='/' />
				<CustomButton onPress={() => handleCalculate('%')} size={20} title='%' />
			</HStack>
		</VStack>
	);
}
