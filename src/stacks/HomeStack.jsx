import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from '../screens/homepage/Homepage';

const Stack = createNativeStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={Homepage} />
        </Stack.Navigator>
    )
}

export default HomeStack