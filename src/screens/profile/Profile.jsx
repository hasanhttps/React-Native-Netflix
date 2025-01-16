import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { storage } from '../../utils/MMKVStore'
import { request, PERMISSIONS } from 'react-native-permissions';
import { launchImageLibrary } from 'react-native-image-picker';
import { useState, useEffect } from 'react';

const Profile = () => {
    const [selectedImage, setSelectedImage] = useState('')
    const [selectedImageUrl, setSelectedImageUrl] = useState('')
    const navigation = useNavigation()

    useEffect(() => {
       console.log(selectedImage)
       console.log(selectedImageUrl)
    }, [selectedImage, selectedImageUrl])
    

    return (
        <View className='flex-1 bg-green-400'>
            <Text className='text-2xl font-semibold text-center mt-20'>
                Hello, this is profile page
            </Text>
            <TouchableOpacity onPress={() => {
                request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES).then((result) => {
                    result === 'granted'
                        ? launchImageLibrary(
                            {
                                mediaType: 'photo',
                                includeBase64: true,
                            },
                            response => {
                                if (!response.didCancel && !response.error) {
                                    const imgData = response.assets[0];
                                    setSelectedImage(imgData.base64);
                                    setSelectedImageUrl(imgData.uri);
                                }
                            },
                        ) :  Alert.alert(
                            'Error',
                            'Could not open image gallery',
                          );
                });
            }} className='px-5 py-3 bg-violet-600 self-center w-[140px] mt-5'>
                <Text className='text-white text-lg text-center'>Edit Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                storage.clearAll()
            }} className='px-5 py-3 bg-red-600 self-center w-[140px] mt-5'>
                <Text className='text-white text-lg text-center'>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile