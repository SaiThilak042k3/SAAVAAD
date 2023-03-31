import { createStackNavigator } from '@react-navigation/stack';


//Screens
import Detials from '../Detials';
import TextInput from './../inputs/TextInput';
import UploadImage from './../inputs/UploadImage';


//theme
import {useContext, StyleSheet} from "react";
import { ThemeContext } from '../../contexts/ThemeContext';


import { colors } from '../../config/Colors';

const InputStack  = createStackNavigator()

const InputStackScreen = () => {
    const {theme} = useContext(ThemeContext);
    let activeColors = colors[theme.mode];

    return ( 
        
            <InputStack.Navigator
                screenOptions={
                    {
                        headerTitleAlign: 'left',
                        headerTitleStyle: {
                            paddingLeft: 10
                        },
                        headerStyle: {
                            backgroundColor: activeColors.secondary
                        },
                        headerTintColor: activeColors.tint,
    
                    }
                }
            >
                <InputStack.Screen name='Detials' component={Detials} 
                options={{
                    headerShown: false  
                  }} />
                {/* <InputStack.Screen name='TextInput' component={TextInput}
                /> */}
                <InputStack.Screen name='UploadImage' component={UploadImage}
                />
                
            </InputStack.Navigator>
        
    )
}



export default InputStackScreen;
