import { StyleSheet } from 'react-native';

const primary = '#FFA1A1';
const secondary = '#FF5757';
const tertiary = '#930707';

const globalStyle = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		paddingHorizontal: 25,
	},
	textPrimary: {
		color: primary,
	},
	bgPrimary: {
		backgroundColor: primary,
	},
	textSecondary: {
		color: secondary,
	},
	bgSecondary: {
		backgroundColor: secondary,
	},
	bgTertiary: {
		backgroundColor: tertiary,
	},
	shadow: {
		shadowColor: '#7F5DF0',
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.35,
		shadowRadius: 2.5,
		elevation: 5,
	},
});

export default {
	globalStyle,
	primary,
	secondary,
	tertiary,
};
