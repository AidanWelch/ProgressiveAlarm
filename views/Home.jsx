import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';

import { AlarmComponent, NewAlarmComponent } from './AlarmComponent.jsx';
import themes from '../style/themes';

export default function Home({ navigation }) {
	const theme = themes.typewriter;

	const [alarms, setAlarms] = useState([]);
	const [nextAlarmId, setNextAlarmId] = useState(0);
	AsyncStorage.getAllKeys().then((keys) => {
		if (keys === []) {
			return;
		}
		for (const key of keys) {
			if (key[0] === 'A') {
				alarms.push(key);
			}
		}
		setAlarms(alarms);
	});
	AsyncStorage.getItem('@nextAlarmId').then((x) => {
		if (x !== null) {
			setNextAlarmId(x);
		}
	});

	return (
		<View>
			<SectionList
				sections={[
					{ title: 'Daily', data: alarms },
					{ title: 'New Alarm', data: ['newalarm'] },
				]}
				keyExtractor={({item}) => item}
				renderItem={({item}) =>
					item.item === 'newalarm' ? (
						<NewAlarmComponent nextAlarmId={nextAlarmId} />
					) : (
						<AlarmComponent alarmId={item} theme={theme} navigation={navigation}/>
					)
				}
				renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
			/>
		</View>
	);
}

const styles = StyleSheet.create();
