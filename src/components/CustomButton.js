import React from 'react';
import { Button } from 'native-base';
import { Text } from 'react-native';

const CustomButton = (props) => {
	const { onPress, title } = props;
	return (
		<Button onPress={onPress} {...props}>
			<Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 30 }}>{title}</Text>
		</Button>
	);
};

export default CustomButton;
