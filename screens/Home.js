import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';

//Components
import MainContainer from '../components/containers/MainContainer';
import StyledText from '../components/text/StyledText';
import FeaturesSection from '../components/Features/FeaturesSection';
import ToolsSection from '../components/tools/ToolsSection';
import HomeHeader from '../components/features/HomeHeader';


//data
import { featuresData } from "../config/data";     

import { colors } from './../config/Colors';

//theme
import {useContext, useState} from "react";
import { ThemeContext } from "./../contexts/ThemeContext";

  
export default function Home() {
  const {theme} = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  // //handle search
  // const [searchData, setSearchData] = useState(featuresData);

  // const handleSearch = (value) => {
  //   if(!value.length) return searchData(featuresData);

  //   const filteredSearchData = featuresData.filter((item) =>
  //     item.title.toLowerCase().include(value.toLowerCase())
  //   );

  //   if(filteredSearchData.length){
  //     setSearchData(filteredSearchData);
  //   } else {
  //     setSearchData(featuresData);
  //   }
  // }

  return (
    <MainContainer>
      <HomeHeader/>
      
        <View style={styles.header}>
          
          <View style={ {height:300, backgroundColor: activeColors.accent}}/>
          <View style={ {flex:1, backgroundColor: activeColors.primary}}/>
          
          

        </View>

      
        <StyledText style={styles.sectionTitle} big>
            Tools #1
        </StyledText>          
        <FeaturesSection
          data={featuresData}
        />
        <StyledText style={styles.sectionTitle} big>
            Tools #2
        </StyledText>
        <ToolsSection 
          data={featuresData}
        />     
       
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    marginTop: 25,
    marginLeft: 25
  },
  header: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1
  },
});