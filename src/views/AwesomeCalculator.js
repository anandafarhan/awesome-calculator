import React from 'react';
import { View, Text } from 'react-native';
import { HStack, VStack, Alert, Collapse, IconButton, CloseIcon } from 'native-base';
import CustomButton from '../components/CustomButton';
import DisplayBox from '../components/DisplayBox';

export default function AwesomeCalculator() {
	const [currentNumber, setCurrentNumber] = React.useState('');
	const [lastNumber, setLastNumber] = React.useState('');
	const [alert, setAlert] = React.useState({ show: false, massage: '' });

	function handleInput(val) {
		// prettier-ignore
		const regex = new RegExp(/[\+\-\%\*\/]$/);
		const check = regex.test(currentNumber);
		const btnVal = regex.test(val);
		if (check && btnVal) {
			return;
		}
		setCurrentNumber((prev) => prev + val);
	}

	const handleFunction = (btnPressed) => {
		switch (btnPressed) {
			case 'DEL':
				setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
				return;
			case 'C':
				setLastNumber('');
				setCurrentNumber('');
				return;
			case '=':
				calculate();
				return;
		}
	};

	const calculate = () => {
		let lastArr = currentNumber[currentNumber.length - 1];
		if (isNaN(lastArr)) {
			return setAlert({ show: true, massage: 'Invalid Operation' });
		} else {
			if (!currentNumber) return;
			try {
				let result = eval(currentNumber).toString();
				setLastNumber(currentNumber + '=');
				setCurrentNumber(result);
				return;
			} catch (error) {
				setAlert({ show: true, massage: 'Invalid Operation' });
			}
		}
	};

	return (
		<View
			style={{
				flex: 1,
			}}
		>
			<VStack space={4} w='100%' pt={5} px={10}>
				<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Calculator</Text>
				<Collapse isOpen={alert.show}>
					<Alert
						status='error'
						action={
							<IconButton
								icon={<CloseIcon size='xs' />}
								onPress={() => setAlert({ show: false, massage: '' })}
							/>
						}
						actionProps={{
							alignSelf: 'center',
						}}
					>
						<Alert.Icon />
						<Alert.Description>{alert.massage}</Alert.Description>
					</Alert>
				</Collapse>
				<DisplayBox lastNumber={lastNumber} currentNumber={currentNumber} />
				<HStack space={4} justifyContent='space-between'>
					<CustomButton
						onPress={() => handleFunction('C')}
						colorScheme='darkPrimary'
						size={16}
						style={{ width: 100 }}
						title='C'
					/>
					<CustomButton
						onPress={() => handleFunction('DEL')}
						colorScheme='darkPrimary'
						size={16}
						style={{ width: 100 }}
						title='DEL'
					/>
				</HStack>
				<HStack space={4} justifyContent='space-between'>
					<CustomButton onPress={() => handleInput(1)} colorScheme='primary' size={16} title={1} />
					<CustomButton onPress={() => handleInput(2)} colorScheme='primary' size={16} title={2} />
					<CustomButton onPress={() => handleInput('-')} colorScheme='darkPrimary' size={16} title='-' />
					<CustomButton onPress={() => handleInput('+')} colorScheme='darkPrimary' size={16} title='+' />
				</HStack>
				<HStack space={4} justifyContent='space-between'>
					<CustomButton onPress={() => handleInput(3)} colorScheme='primary' size={16} title={3} />
					<CustomButton onPress={() => handleInput(4)} colorScheme='primary' size={16} title={4} />
					<CustomButton onPress={() => handleInput('/')} colorScheme='darkPrimary' size={16} title='/' />
					<CustomButton onPress={() => handleInput('*')} colorScheme='darkPrimary' size={16} title='*' />
				</HStack>
				<HStack space={4} justifyContent='space-between'>
					<CustomButton onPress={() => handleInput(5)} colorScheme='primary' size={16} title={5} />
					<CustomButton onPress={() => handleInput(6)} colorScheme='primary' size={16} title={6} />
					<CustomButton onPress={() => handleInput('%')} colorScheme='darkPrimary' size={16} title='%' />
					<CustomButton
						onPress={() => handleFunction('=')}
						colorScheme='darkPrimary'
						size={16}
						title='='
					/>
				</HStack>
				<HStack space={4} justifyContent='space-between'>
					<CustomButton onPress={() => handleInput(7)} colorScheme='primary' size={16} title={7} />
					<CustomButton onPress={() => handleInput(8)} colorScheme='primary' size={16} title={8} />
					<CustomButton onPress={() => handleInput(9)} colorScheme='primary' size={16} title={9} />
					<CustomButton onPress={() => handleInput(0)} colorScheme='primary' size={16} title={0} />
				</HStack>
			</VStack>
		</View>
	);
}
