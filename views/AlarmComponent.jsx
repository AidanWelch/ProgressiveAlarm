import translate from 'google-translate-api-x';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AlarmComponent({ alarmId }) {
	const [text, setText] = useState();
	AsyncStorage.getItem(alarmId).then((alarm) => {

	});
	translate('testing', { to: 'ja' }).then((res) => {
		setText(res.text);
	});
	return (
		<Pressable onPress={null} onLongPress={null}>
			<Text>This is a new alarm</Text>
		</Pressable>
	);
}

function NewAlarmComponent({ nextAlarmId }) {
	return (
		<Pressable
			accessible
			accessibilityLabel='New Alarm'
			accessibilityRole='button'
			/*accessibilityActions={}*/
		>
			<Text>Create a new alarm</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fed',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export { AlarmComponent, NewAlarmComponent };
