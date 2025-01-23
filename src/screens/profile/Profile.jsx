import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { storage } from '../../utils/MMKVStore';
import { useMMKVString } from 'react-native-mmkv';
import { Text, TouchableOpacity, View, Image } from 'react-native';

const Profile = () => {
    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');

    const [selectedLanguage, setSelectedLanguage] = useMMKVString("selectedLanguage");
    const { t } = useTranslation();

    useEffect(() => {
        setUsername(storage.getString('username') || "");
        setAvatar(storage.getString('avatar') || '');
    }, []);

    const handleLanguage = () => {
        setSelectedLanguage((prevState) => (prevState === "en" ? "ru" : "en"));
    };


    const handleLogout=async()=>{
        try{
            const response=await fetch(`http://192.168.0.128:3000/api/v1/auth/logout`,{
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json",                
                }
            });

            storage.delete("accessToken")
            storage.set("firstTimeUser",false)

        }catch(error){
            console.error(error);
        }
    }

    return (
        <View className='flex-1 bg-black p-4'>
            <View className='items-center mt-10'>
                <View className='w-[254px] h-[254px] bg-gray-500 rounded-full overflow-hidden'>
                    {avatar ? (
                        <Image
                            source={{ uri: avatar }}
                            className='w-full h-full'
                            resizeMode='cover'
                        />
                    ) : (
                        <Text className='text-white text-center mt-8'>{t("noavatar")}</Text>
                    )}
                </View>

                <Text className='text-white font-bold text-xl mt-4'>
                    {username}
                </Text>
            </View>


            <TouchableOpacity onPress={handleLanguage} className="absolute right-7 top-3">
                <Text className="text-white">{t("language")}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogout} className='bg-[#E50A14] mt-6 py-5 rounded-lg'><Text className='text-white text-center font-bold text-xl'>{t("logout")}</Text></TouchableOpacity>

        </View>
    );
};

export default Profile;