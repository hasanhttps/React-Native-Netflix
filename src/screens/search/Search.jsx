import { useState } from "react";
import Actors from "./components/Actors";
import { useTranslation } from "react-i18next";
import {TextInput,ScrollView } from "react-native";
import ContentList from "../../stacks/ContentList";

const Search = () => {

    const { t } = useTranslation();
    const[searchTerm,setSearchTerm] = useState("");

    return(
        <ScrollView contentContainerStyle={{backgroundColor:"black",flex:1}}>
            <TextInput placeholderTextColor="#827F83" placeholder={t("searchquery")} className="bg-[#353236] mx-5 mt-8 rounded-[5px] px-3 py-4 text-white text-lg" onChangeText={(text)=>{
                setSearchTerm(text);
            }}/>
            {
                searchTerm&&
                <>
                    <Actors searchTerm={searchTerm}/>
                    <ContentList searchTerm={searchTerm} type="movie"/>
                    <ContentList searchTerm={searchTerm} type="tv"/>
                </>
            }
        </ScrollView>
    )
}
export default Search;