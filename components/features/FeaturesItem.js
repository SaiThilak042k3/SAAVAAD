import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors } from '../../config/Colors';
import { useNavigation } from '@react-navigation/native';

//components
import StyledText from '../text/StyledText';

//theme
import {useContext} from "react";
import { ThemeContext } from '../../contexts/ThemeContext';



const FeaturesItem = ({ image, title, input1, input2, apiName, ...props }) => {
  const navigation = useNavigation(); 
  const {theme} = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
    return (
      
      
        <TouchableOpacity 
        onPress={() => {
          navigation.navigate("Detials",
           {image, title, input1, input2, apiName}
          )
        }}

        style={[{
            backgroundColor: activeColors.secondary}, 
            styles.container
        ]} {...props}>
            <Image source={image} style={styles.image}/>
            <View style={styles.bottomSection}>
              <StyledText
                numberOfLines={3}
                style={[{ color: activeColors.accent }, 
                styles.title
              ]} bold>
              
              {title}
            </StyledText>

            </View>
            
        </TouchableOpacity>
            

        
        
    );
}


const styles = StyleSheet.create({
    container: {
      height: 270,
      width: 300,
      borderRadius: 20,
      marginRight: 20
    },
    image: {
      width: 300,
      height: 190,
      borderRadius: 25,
      resizeMode: 'contain'
          
    },
    bottomSection: {
      padding: 25,
      flex: 1,
      justifyContent: "space-betwwen"
    },
    title: {
        fontSize: 25,

    },
  });

export default FeaturesItem;