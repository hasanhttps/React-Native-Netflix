import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import TabBar from './components/TabBar';
import ProfileStack from './ProfileStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      tabBar={
        ({ state, descriptors, navigation }) =>
          <TabBar
            state={state}
            descriptors={descriptors}
            navigation={navigation}
          />
      }
      screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Home' component={HomeStack} />
      <Tab.Screen name='Search' component={SearchStack} />
      <Tab.Screen name='Profile' component={ProfileStack} />
    </Tab.Navigator>
  )
}

export default TabStack