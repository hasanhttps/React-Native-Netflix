import "./global.css"
import './gesture-handler';
import Navigation from "./src/stacks/Navigation"
import { useMMKVString } from "react-native-mmkv";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

const App = () => {

  const[selectedLanguage,setSelectedLanguage]=useMMKVString('selectedLanguage');
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App