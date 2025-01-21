import { useState } from "react"
import { useEffect } from "react"
import { View, Text } from "react-native"
import { useTranslation } from "react-i18next"
import FastImage from "react-native-fast-image"
import { useNavigation } from "@react-navigation/native"
import { Dimensions, TouchableOpacity } from "react-native"

const Poster = () => {
  const [visibleShow,setVisibleShow]=useState({})
  const screenWidth = Dimensions.get("screen").width
  const { t } = useTranslation()
  const navigation = useNavigation()

  const getShowData = async() => {
    try {
      const response = await fetch('http://192.168.0.109:3000/api/v1/tv/trending')
      const data = await response.json()
      setVisibleShow(data.content[0])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getShowData()
  }, [])

  return (
    <View className="w-screen pt-4 px-[27px] relative mb-5">
      <FastImage style={{width:"auto",height:500,backgroundColor:"black"}} source={{
        uri:`https://image.tmdb.org/t/p/original/${visibleShow.poster_path}`,
        priority:FastImage.priority.high
      }}
      resizeMode={FastImage.resizeMode.cover}
      >
      </FastImage>

      <View className="w-full absolute bottom-0 left-[27px] flex-row justify-between items-center p-[14px]">
        <TouchableOpacity className="bg-white w-[48%] py-[10px] rounded-[6px]" onPress={()=>{
      navigation.navigate("Home",{screen:"Details",params:{id:visibleShow.id,type:'tv'}})
    }}>
          <Text className="text-[#191B1E] text-xl font-extrabold text-center">{t("play")}</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#2E2B2F] w-[48%] py-[10px] rounded-[6px]">
          <Text className="text-white text-xl font-extrabold text-center">{t("mylist")}</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
  
export default Poster