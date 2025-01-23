import Search from '../screens/search/Search';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const SearchStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Search" component={Search}/>
        </Stack.Navigator>
    )
}

export default SearchStack;