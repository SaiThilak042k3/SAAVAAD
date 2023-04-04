import { StyleSheet, Text, Image } from 'react-native';

//Components
import MainContainer from '../components/containers/MainContainer';



import { colors } from '../config/Colors';



//theme
import {useContext} from "react";
import { ThemeContext } from "./../contexts/ThemeContext";

import StyledText from '../components/text/StyledText';
import FeaturesSection from '../components/Features/FeaturesSection';
import { featuresData } from '../config/data';


export default function Help() {

 

  const {theme} = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  
  return (
    <MainContainer style={{
      backgroundColor: activeColors.secondary}      
    }
    >

           <StyledText style={styles.sectionTitle} big>
                Tools #1
            </StyledText>          
            <FeaturesSection
              data={featuresData}
        /> 
    </MainContainer>
  );
}


const styles = StyleSheet.create({  
  image: {
    marginTop: '50%',
    width: '100%',
    height: 300,
    resizeMode:'contain'
  },
});