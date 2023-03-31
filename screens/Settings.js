import { useState } from 'react';

import { StyleSheet,View, Switch} from 'react-native';

//Components
import MainContainer from '../components/containers/MainContainer';
import StyledText from '../components/text/StyledText';
import SettingsItem from '../components/settings/SettingsItem';

import { colors } from '../config/Colors';
 
//theme
import {useContext} from "react";
import { ThemeContext } from "./../contexts/ThemeContext";


  
export default function Settings() {

    const {theme, updateTheme} = useContext(ThemeContext); 
    let activeColors = colors[theme.mode];

  const [isActive, setIsActive] = useState(theme.mode === "dark");
  const handleSwitch = () => {
    updateTheme();
    setIsActive((previousState) => !previousState);
  }
  return (
    <MainContainer style={styles.container}>
          <StyledText
                
                style={{ color: activeColors.accent }                
              } big>
                User
            </StyledText>

            <View style={
                 
                styles.section}
            >

                <SettingsItem label="Name">
                    <StyledText>
                        Thilak
                    </StyledText>        
                </SettingsItem>
                <SettingsItem label="Gender">
                    <StyledText>
                        Male
                    </StyledText>
                </SettingsItem>
                <SettingsItem label="Date of birth">
                    <StyledText>
                        04 / 02 / 2003
                    </StyledText>
                </SettingsItem>
              

            </View>

            <StyledText
                
                style={{ color: activeColors.accent }                
              } big>
                Theme Switch
            </StyledText>

            <View style={
                 
                styles.section}
            >

                <SettingsItem label="Dark Mode" icon="user">
                    <StyledText>
                        <Switch 
                        value={isActive}
                        onValueChange={handleSwitch}
                        //thumbColor={isActive ? activeColors.accent : activeColors.tertiary}
                        // trackColor={{
                        //     false: activeColors.primary,
                        //     true: activeColors.tertiary,
                        // }}
                        />
                    </StyledText>
                </SettingsItem>
                
              

            </View>
    </MainContainer>
  );
}


const styles = StyleSheet.create({
    container: {
        padding: 25,
        
    },
   section: {
    borderRadius: 30,
    overflow: 'hidden',
    marginTop: 25,
    marginBottom: 25
   }
   
});