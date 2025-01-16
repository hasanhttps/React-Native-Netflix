import { View, TouchableOpacity, Text } from 'react-native';
import HomeActive from "../../../assets/icons/homeActive.svg"
import HomeInactive from "../../../assets/icons/homeInactive.svg"
import ProfilActive from "../../../assets/icons/profileActive.svg"
import ProfilInactive from "../../../assets/icons/profileInactive.svg"

const TabBar = ({ state, descriptors, navigation }) => {

  return (
    <View
      className={`border-t-[1px] border-zinc-100 flex-row bg-white justify-between items-center px-[30px] py-3`}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = route.name;

        const isFocused = state.index === index;

        let icon;

        if (label === 'Home') {
          icon = isFocused ? <HomeActive /> : <HomeInactive />;
        } else if (label === 'Profile') {
          icon = isFocused ? <ProfilActive /> : <ProfilInactive />;
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          // Handle default navigation to the selected tab if not focused
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            className='items-center'
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            // disabled={label === 'Profile'}
          >
            <View className='size-[25px]'>
            {icon}
            </View>
            <Text
              className={`text-center ${isFocused ? 'text-[#327b3b]' : 'text-[#757575]'
                } text-sm mt-1`}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
