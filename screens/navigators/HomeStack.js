import { createStackNavigator } from '@react-navigation/stack';


//Screens
import Home from '../Home';
import Detials from '../Detials';
import Profile from '../Profile';


//theme
import {useContext, StyleSheet} from "react";
import { ThemeContext } from '../../contexts/ThemeContext';


import { colors } from '../../config/Colors';

import TextInput from '../inputs/TextInput';
import UploadImage from '../inputs/UploadImage';
import TextToAudio from './../inputs/TextToAudio';
import TranslateText from '../inputs/TranslateText';

const HomeStack  = createStackNavigator()

const HomeStackScreen = () => {
    const {theme} = useContext(ThemeContext);
    let activeColors = colors[theme.mode];

    return ( 
        
            <HomeStack.Navigator
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
                <HomeStack.Screen name='Home' component={Home} 
                options={{
                    headerShown: false  
                  }} />
                <HomeStack.Screen name='Detials' component={Detials}
                />
                <HomeStack.Screen name='Profile' component={Profile}
                />
                <HomeStack.Screen name='TextInput' component={TextInput}
                />
                <HomeStack.Screen name='UploadImage' component={UploadImage}
                />
                <HomeStack.Screen name='TextToAudio' component={TextToAudio}
                />
                <HomeStack.Screen name='TranslateText' component={TranslateText}
                />
                
            </HomeStack.Navigator>
        
    )
}



export default HomeStackScreen;
