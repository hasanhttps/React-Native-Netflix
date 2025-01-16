import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const EditProfile = () => {
  const route = useRoute()
  const {message, age} = route.params

  return (
    <View>
      <Text>{message}</Text>
      <Text>{age}</Text>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({})