import translate from 'google-translate-api-x';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AlarmComponent({ alarmId, theme, navigation }) {
	const [text, setText] = useState();
	AsyncStorage.getItem(alarmId).then((alarm) => {

	});
	translate('testing', { to: 'ja' }).then((res) => {
		console.log(res)
		//setText(res.text);
	}).catch(e => console.error(e));
	return (
		<Pressable onPress={null} onLongPress={null}>
			<Text>This is a new alarm id: {alarmId} </Text>
		</Pressable>
	);
}

function NewAlarmComponent({ nextAlarmId, theme, navigation }) {
	return (
		<Pressable
			accessible
			accessibilityLabel='New Alarm'
			accessibilityRole='button'
			/*accessibilityActions={}*/
			onPress={() => {console.log('naved'); navigation.navigate('AlarmEditor')}}
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
