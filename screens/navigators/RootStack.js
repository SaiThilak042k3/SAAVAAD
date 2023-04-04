import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import {AntDesign} from '@expo/vector-icons';


//Screens
import Settings from '../Settings';
import HomeStackScreen from './HomeStack';
import Help from '../Help';

import { colors } from '../../config/Colors';

//theme
import {useContext} from "react";
import { ThemeContext } from '../../contexts/ThemeContext';
import Signin from '../login/Signin';
import Signup from '../login/Signup';

const Tab = createBottomTabNavigator()  
const Stack = createStackNavigator()

const RootStack = () => {
  const {theme} = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

    return ( 
     
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Signin'>
              <Stack.Screen name='Signup' component={Signup} />
              <Stack.Screen name='Signin' component={Signin} />
          </Stack.Navigator>
            {/* <Tab.Navigator
            
            screenOptions={(route) => ({
                tabBarIcon: ({ color, size }) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    iconName = "home"
                  } else if (route.name === 'Settings') {
                    iconName = 'cog';
                  }
      
                  // You can return any component that you like here!
                  return <AntDesign   name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: activeColors.accent,
                tabBarInactiveTintColor: activeColors.tertiary,
                tabBarStyle: {
                    backgroundColor: activeColors.secondary,                        
                },
                //tabBarShowLabel: false
                headerTitleAlign: 'left',
                headerTitleStyle: {
                    paddingLeft: 10
                },
                headerStyle: {
                    backgroundColor: activeColors.secondary
                },
                headerTintColor: activeColors.tint,


              })}
            
            >        
                      
                <Tab.Screen name='Home' component={HomeStackScreen} 
                options={{
                  headerShown: false  
                }}/>
                <Tab.Screen name='help' component={Help} 
                options={{
                  headerShown: false  
                }}/>  
                <Tab.Screen name='Settings' component={Settings} />
                
            </Tab.Navigator> */}
        </NavigationContainer>
        
    )
}




export default RootStack;


