import { StyleSheet,View, Image, Alert, TouchableOpacity } from 'react-native';

//Components
import MainContainer from '../components/containers/MainContainer';
import StyledText from '../components/text/StyledText';

import { useNavigation } from '@react-navigation/native';


//inputs

import  TextInput from './inputs/TextInput'

import { colors } from '../config/Colors';


//swipe button
import { SwipeButton } from 'react-native-expo-swipe-button';

//theme
import {useContext} from "react";
import { ThemeContext } from "./../contexts/ThemeContext";

//ml model
import TextSummary from './mlConnectors/TextSummary';
import ImageToSummary from './mlConnectors/ImageToSummary';


export default function Detials({route}) {

  const {image, title, input1, input2, apiName} = route?.params;

  const navigation = useNavigation(); 

  const {theme} = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  
  return (
    <MainContainer style={{
      backgroundColor: activeColors.secondary}      
    }
    >
          <Image source={image} style={styles.image}/>
            <View style={[{backgroundColor: activeColors.secondary}, styles.bottomSection]}>
              <StyledText
                numberOfLines={3}
                style={[{ color: activeColors.accent }, 
                styles.title
              ]} big>
              
              {title}
            </StyledText>         

          
            
              <SwipeButton
              // Icon={
              //   <MaterialIcons name="keyboard-arrow-right" size={50} color="white" />
              // }
                onComplete={() => navigation.navigate(apiName)}
                title={input1}
                titleStyle={{ color: 'white' }}
                borderRadius={180}
                containerStyle={{ backgroundColor: 'white' }}
                underlayTitle={"Release to complete" }
                underlayTitleStyle={{ color: 'white' }}
                containerGradientProps={{
                  colors: ['#0236BF', '#02C9BC'],
                  start: [0, 0.5],
                  end: [1, 0.5],
                }}
                underlayContainerGradientProps={{
                  colors: ['#026DC9', '#02BF7D'],
                  start: [0, 0.5],
                  end: [1, 0.5],
                }}
            /> 

          


            <SwipeButton
                // Icon={
                //   <Image source={require('./../assets/images/UploadImage.png')}/>
                // }
                onComplete={() => navigation.navigate(apiName)}
                title={input2}
                titleStyle={{ color: 'white' }}
                borderRadius={180}
                containerStyle={{ backgroundColor: 'white' }}
                underlayTitle="Release to complete" 
                underlayTitleStyle={{ color: 'white' }}
                containerGradientProps={{
                  colors: ['#0236BF', '#02C9BC'],
                  start: [0, 0.5],
                  end: [1, 0.5],
                }}
                underlayContainerGradientProps={{
                  colors: ['#026DC9', '#02BF7D'],
                  start: [0, 0.5],
                  end: [1, 0.5],
                }}
            />        

               

            
            
            </View>
    </MainContainer>
  );
}


const styles = StyleSheet.create({  
  image: {
    width: '100%',
    height: 300,
    resizeMode:'contain'
  },
  bottomSection: {
    padding: 25,
    top: -30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  },
  title: {
      marginBottom: 20,

  },
  section: {
    borderRadius: 30,
    overflow: 'hidden',
    marginTop: 25,
    marginBottom: 25
   }
});