import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './views/Home.jsx';
import AlarmEditor from './views/AlarmEditor.jsx';
import Settings from './views/Settings.jsx';
import AlarmDefuser from './views/AlarmDefuser.jsx';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="AlarmEditor" component={AlarmEditor} />
				{/*<Stack.Screen name="Settings" component={Settings} />*/}
				{/*<Stack.Screen name="AlarmDefuser" component={AlarmDefuser} />*/}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
