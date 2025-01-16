import { Text, TouchableOpacity, Image, Platform } from 'react-native'

const ProductCard = ({ product }) => {
  const os = Platform.OS

  return (
    <TouchableOpacity className={`flex-1 mx-4 bg-white p-3 shadow-md ${os === 'ios' ? "shadow-zinc-400" : "shadow-zinc-700"} rounded-t-lg`}>
      <Image resizeMode='contain' className='h-[150px]' source={{ uri: product.gallery[0] }}/>
      <Text className='my-3 font-semibold text-xl' numberOfLines={1}>{product.title}</Text>
      <Text numberOfLines={2}>{product.description}</Text>
    </TouchableOpacity>
  )
}

export default ProductCard