import TabStack from './TabStack';
import AuthStack from './AuthStack';
import { useMMKVString } from 'react-native-mmkv';
import { NavigationContainer } from '@react-navigation/native';

const Navigation = () => {
  const [accessToken, setAccessToken] = useMMKVString('accessToken')

  return (
    <NavigationContainer>
      {accessToken ? <TabStack /> : <AuthStack/>}
    </NavigationContainer>
  )
}

export default Navigation