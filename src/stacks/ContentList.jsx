import ContentCard from './ContentCard'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View, FlatList } from 'react-native'

const ContentList = ({searchTerm,type}) => {

    const { t } = useTranslation();
    const [data, setData] = useState([])

  const getData = async () => {
    try {
      const response = await fetch(searchTerm ? `http://192.168.0.128:3000/api/v1/search/${type}/${searchTerm}`:`http://192.168.0.128:3000/api/v1/${type}/trending`)
      const data = await response.json()
      setData(data.content);
    } catch (error) {
      console.log(error)
    }
  }

  const NoItems = () => <View className='w-full h-full items-center justify-center'>
    <Text>{t("noitemsfound")}</Text>
  </View>

  useEffect(() => {
    getData()
  }, [searchTerm,type])

  return (
    <>
    <View className='mt-6'>
      <Text className='font-manropeBold text-white text-2xl ml-2 mb-2'>{searchTerm?`${t("resultsfor")}`+` ${type==="tv"?t("tvshows"):t("movies")}`:type==="movie" ?`${t("trendingmovies")}`:`${t("trendingshows")}`}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={NoItems}
        contentContainerStyle={{ gap: 8,paddingHorizontal:8}}
        data={data}
        renderItem={({ item }) => <ContentCard item={item} type={type} />} />
    
    </View>
    </>
  )
}

export default ContentList  