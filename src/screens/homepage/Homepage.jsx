import React from 'react'
import Poster from './components/Poster'
import { ScrollView } from 'react-native'
import ContentList from '../../stacks/ContentList'

const Homepage = () => {
  return (
    <ScrollView contentContainerStyle={{paddingBottom:20}} className='flex-1 bg-black'>
      <Poster/>
      <ContentList searchTerm="" type="movie"/>
      <ContentList searchTerm="" type="tv"/>
    </ScrollView>
  )
}

export default Homepage