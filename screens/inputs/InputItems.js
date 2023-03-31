import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors } from '../../config/Colors';
import { useNavigation } from '@react-navigation/native';

//components
import StyledText from '../text/StyledText';




const ToolsItem = ({ image, title, content, ...props }) => {
    const navigation = useNavigation(); 
    return (
      
      
        <TouchableOpacity 
        onPress={() => {    
            navigation.navigate("Detials",
            
              {image, title, content}
            )
          }} 
          style={[             
            styles.container
            
        ]} {...props}>      
              
            <Image source={image} style={ styles.image } />
            <StyledText
                numberOfLines={1}
                style={ styles.title}
                    bold>
              
                 {title}
            </StyledText>

            
            
        </TouchableOpacity>
            

        
        
    );
}


const styles = StyleSheet.create({
    container: {
      height: 170,
      width: 150,
      marginRight: 20
    },
    image: {
        height: 120,
        width: 120,
        borderColor: colors.accent,
        borderRadius: 2
    },    
    title: {
        fontSize: 20,
        color: colors.light.accent, 
        height: '100%',
        width: '100%',
        marginTop: 10
        


    },
  });

export default ToolsItem;