import './global.css';
import React from 'react';
import "./src/locals/index";
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from './src/stacks/Navigation';
import { useMMKVString } from 'react-native-mmkv';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

enableScreens();

const App = () => {

  const[selectedLanguage,setSelectedLanguage]=useMMKVString('selectedLanguage');
  
  const {i18n}=useTranslation();
  useEffect(()=>{
    if(selectedLanguage){
      i18n.changeLanguage(selectedLanguage);
    }
  },[selectedLanguage]);
  
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App