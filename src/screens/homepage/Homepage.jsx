import { useState, useEffect } from 'react'
import { Text, View, FlatList, SectionList, Dimensions } from 'react-native'
import ProductCard from './components/ProductCard'

const Homepage = () => {
  const scale = Dimensions.get("screen").scale
  const fontScale = Dimensions.get("screen").fontScale
  const screenWidth = Dimensions.get('screen').width
  const screenHeight = Dimensions.get('screen').height
  const [products, setProducts] = useState([])
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  console.log("Scale:",scale)
  console.log("Font Scale:", fontScale)


  const getProductData = async () => {
    try {
      const response = await fetch('http://192.168.0.107:3000/api/products?pageSize=20')
      const data = await response.json()

      const groupedData = Object.values(
        data.products.reduce((acc, item) => {
          if (!acc[item.category]) {
            acc[item.category] = {
              title: item.category,
              data: [],
            };
          }
          acc[item.category].data.push(item);
          return acc;
        }, {})
      );

      setProducts(groupedData)
    } catch (error) {
      console.log(error)
    }
  }

  const NoItems = () => <View className='w-full h-full items-center justify-center'>
    <Text>No items found</Text>
  </View>

  useEffect(() => {
    getProductData()
  }, [])


  return (
    <>
      {isOverlayOpen && <View style={{ width: screenWidth, height: screenHeight }} className='bg-black/20 absolute z-10'></View>}

      <SectionList
        ListEmptyComponent={NoItems}
        contentContainerStyle={{ gap: 16, backgroundColor: 'white' }}
        sections={products}
        stickySectionHeadersEnabled
        renderSectionHeader={({ section: { title } }) => (
          <Text className={`${fontScale === 1 ? "text-3xl" : "text-base"}  p-5 font-semibold bg-white`}>{title}</Text>
        )}
        renderItem={({ item }) => <ProductCard product={item} />} />
    </>

  )
}

export default Homepage