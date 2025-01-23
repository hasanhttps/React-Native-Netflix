import Profile from '../screens/profile/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProfileScreen" component={Profile} />
        </Stack.Navigator>
    )
}

export default ProfileStack