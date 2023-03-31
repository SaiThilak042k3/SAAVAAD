import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { colors }  from './../../config/Colors';

//components
import StyledText from '../text/StyledText';

//theme
import {useContext} from "react";
import { ThemeContext } from './../../contexts/ThemeContext';


const HomeHeader = () => {
    
    const {theme} = useContext(ThemeContext);
    let activeColors = colors[theme.mode];

    const navigation = useNavigation(); 

    return (
        <View style={{
            backgroundColor: activeColors.accent,
            padding: 25
        }}>
           
            <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
                <Image source={require('./../../assets/images/logo-w.png')} 
                resizeMode="contain"
                style={{width: 150, height:70}}
                />
                
                <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Profile")
                  }}>
                    <View style={{width: 50, height: 45}}>
                        <Image                 
                        source={require('./../../assets/images/avatar.png')}
                        resizeMode="contain"
                        style={{width: "100%", height:"100%", borderRadius: '25%'}}
                        />       
                    </View>
                </TouchableOpacity>
            </View>  
            <View>
                <View style={{marginVertical: 20,
                            marginLeft: 10,
                }}>
                    <StyledText
                    numberOfLines={1}
                    style={[{ color: '#ffffff'}                    
                    ]} small>              
                        Hello, Thilak 👋
                    </StyledText>
                
                    <StyledText
                    style={[{ color: '#ffffff' }                    
                    ]} big>              
                        Just Click it!
                    </StyledText>
                </View>
            </View>     
            
            <View style={{marginTop: 20, alignItems: 'center'}}>
                <View style={{
                    width: '75%',
                    height: '75%',
                    borderRadius: 10,
                    backgroundColor: '#E5E8E8',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 25
                }}>
                    <Image                 
                        source={require('./../../assets/images/search.png')}
                        resizeMode="contain"
                        style={{width: 20, height:20, marginTop: 5, marginLeft: 10}}
                    />
                    <TextInput 
                        placeholder="Search"
                        style={{ flex: 1 , marginLeft: 10 }}
                        onChangeText={() => {}}
                    />
                </View>
            </View>
        </View>
    )
}




  
export default HomeHeader;

{/* <View style={styles.container}>	

<TextInput style={styles.input}
    placeholder="Summary"
    value={summaryText}
    onChangeText={(text) => setSummary(text)}
    keyboardType="summary"    
/>

<Button 
    title="Submit"
    onPress={handlePress}
    marginTop='25'
/>

<Text style={styles.result}>
    {resultText}
</Text>
</View>

const styles = StyleSheet.create({
	container: {
		
	},
	result: {
		
	},
	input: {
		
	},
}); */}