import Login from '../screens/auth/login/Login';
import { useMMKVBoolean } from 'react-native-mmkv';
import Register from '../screens/auth/register/Register';
import Onboarding from '../screens/onboarding/Onboarding';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    const [firstUser, setfirstUser] = useMMKVBoolean('firstUser')

    useEffect(() => {
        setfirstUser(true);
    }, [1])
    return (
        <Stack.Navigator>
            {firstUser && <Stack.Screen name="Onboarding" component={Onboarding} />}
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default AuthStack