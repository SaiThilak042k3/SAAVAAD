import { StyleSheet, Text, Image } from 'react-native';

//Components
import MainContainer from '../components/containers/MainContainer';



import { colors } from '../config/Colors';



//theme
import {useContext} from "react";
import { ThemeContext } from "./../contexts/ThemeContext";





export default function Help() {

 

  const {theme} = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  
  return (
    <MainContainer style={{
      backgroundColor: activeColors.secondary}      
    }
    >

            <Text>HELP</Text>
        
          <Image source={require('./../assets/images/underWork.png')} style={styles.image}/>
            
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