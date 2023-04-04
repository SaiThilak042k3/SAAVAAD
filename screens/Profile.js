import { StyleSheet,Image, View, Text, Pressable } from 'react-native';

//Components
import MainContainer from '../components/containers/MainContainer';

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { ProgressBar } from 'react-native-paper';

import { colors } from '../config/Colors';
  


//theme
import {useContext} from "react";
import { ThemeContext } from "./../contexts/ThemeContext";





export default function Profile() {

 

  const {theme} = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  
  return (
    <MainContainer style={{
      backgroundColor: activeColors.secondary}      
    }
    >
    <View style={styles.userRow}>
      <Image
        style={styles.userImage}
        source={require('./../assets/images/avatar.png')}
      />
      <View style={styles.userNameRow}>
        <Text style={styles.userNameText}>Thilak</Text>
      </View>
      <View style={styles.userBioRow}>
        <Text style={styles.userBioText}>cs student</Text>
      </View>
    </View>

    <View style={[{marginTop:30}, {alignItems: 'center'}]}>
        <AnimatedCircularProgress
          size={120}
          width={15}
          fill={100}
          duration={10000}
          tintColor="#00e0ff"
          
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#3d5875"
        />
        <View style={styles.textView}>
          <Text style={styles.userNameText}>50%</Text>
        </View> 
    
  </View>
  <View style={[{marginTop:60}]}>
    <View style={styles.ProgressBarContain}>
        <Text style={styles.ProgressBarText}>Summary Text</Text>
        <ProgressBar style={styles.ProgressBar}progress={0.5} color="#49B5F2" />
    </View>
    
  </View>
  <View style={[{marginTop:60}]}>
    <View style={styles.ProgressBarContain}>
        <Text style={styles.ProgressBarText}>Translation</Text>
        <ProgressBar style={styles.ProgressBar}progress={0.7} color="#49B5F2" />
    </View>
    
  </View>
  <View style={[{marginTop:60}]}>
    <View style={styles.ProgressBarContain}>
        <Text style={styles.ProgressBarText}>Audio Translation</Text>
        <ProgressBar style={styles.ProgressBar}progress={0.3} color="#49B5F2" />
    </View>
    
    
  </View>
  
    <Pressable style={styles.button} >
      <Text style={styles.text}>logout</Text>
    </Pressable>
            
    </MainContainer>
  );
}


const styles = StyleSheet.create({  
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginBottom: 10,
    marginTop: 45,
  },
  userBioRow: {
    marginLeft: 40,
    marginRight: 40,
  },
  userBioText: {
    color: 'gray',
    fontSize: 18,
    textAlign: 'center',
  },
  userImage: {
    borderRadius: 60,
    height: 120,
    marginBottom: 10,
    width: 120,
  },
  userNameRow: {
    marginBottom: 10,
  },
  userNameText: {
    color: '#5B5A5A',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 12,
  },
  textView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  ProgressBar: {
    width: '75%',
    height: 10,
    borderRadius: 25,
  },
  ProgressBarContain:{
    marginLeft: 30
  },
  ProgressBarText:{
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5
  },
  button: {
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',   
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,    
    letterSpacing: 0.25,
    color: 'red',
  },

});