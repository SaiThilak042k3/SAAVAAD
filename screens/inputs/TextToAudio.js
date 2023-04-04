import { StyleSheet,Image, TextInput, TouchableOpacity, Pressable, Text, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import {useState} from 'react';

//Components
import MainContainer from '../../components/containers/MainContainer';

//ml model
import TextSummary from './../mlConnectors/TextSummary';

import { colors } from '../../config/Colors';

import { Audio } from 'expo-av';


//theme
import {useContext} from "react";
import { ThemeContext } from '../../contexts/ThemeContext';





export default function InputText() {

  const [copiedText, setCopiedText] = useState('');
  const [summaryText, setSummary] = useState("");
  const [resultText, setResultText] = useState("");
  const [summaryResult, setSummaryResult] = useState("");
  const [audioURI, setAudioURI] = useState('');

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };

  const handleTextToAudio = async () => {
    const response = await fetch('http://192.168.34.133:12345/text_audio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: summaryText,
      }),
    });

     // Convert the response to a blob
     const audioBlob = await response.blob();
     console.log(audioBlob);

     // Create a URI for the audio file
     const uri = URL.createObjectURL(audioBlob);

    //const { uri } = await response.json();
    setAudioURI(uri);
    console.log("got audio");
    console.log(uri);
    
  };

  const handlePlayAudio = async () => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync({ uri: audioURI });
      await soundObject.playAsync();
    } catch (error) {
      console.log(error);
    }
  };

  const {theme} = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  
  
  return (
    <MainContainer style={{
      backgroundColor: activeColors.secondary}      
    }
    >
        
        <View style={{marginTop: 20, alignItems: 'center'}}>
                <View style={{
                    width: '75%',
                    height: '50%',
                    borderRadius: 10,
                    backgroundColor: '#E5E8E8',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 25
                }}>                  
                    {/* <TextInput 
                        placeholder="Type or paste your Text"
                        style={{ flex: 1 , marginLeft: 10 }}
                        onChangeText={(copiedText) => {copiedText}}
                    /> */}
                    <TextInput
                      style={styles.textInput}
                      maxLength={1000}
                      editable
                      multiline
                      numberOfLines={4}
                      placeholder="Type or paste your Text to get voice"
                      onChangeText={(text) => setSummary(text)}
                      value={summaryText}
                    />  
                    <TouchableOpacity
                        onPress={fetchCopiedText}>
                    <Image                 
                        source={require('./../../assets/images/copyText.png')}
                        resizeMode="contain"
                        style={{width: 20, height:20, marginTop: 5, marginRight: 10}}
                    />              
                  </TouchableOpacity>
                    
                </View>
                <Pressable style={[styles.button]}   onPress={handleTextToAudio}>
                  <Text style={styles.text}>Submit</Text>
                </Pressable>

                
        

    
        <View>      
                <TouchableOpacity
                        onPress={handlePlayAudio}>            
                     <Image                 
                        source={require('./../../assets/images/voice-message.png')}
                        resizeMode="contain"
                        style={{width: 100, height: 100, marginTop: 30, padding: 25}}
                    />
                </TouchableOpacity>
                   
                    
            </View>

            </View>
                
          
                


        

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
  button: {
	  alignItems: 'center',
	  justifyContent: 'center',
	  paddingVertical: 12,
	  paddingHorizontal: 32,
	  borderRadius: 25,
	  //elevation: 3,
    marginTop: 15,
    backgroundColor: '#0891b2',
    width: '50%'
	},
	text: {
	  fontSize: 16,
	  lineHeight: 21,
	  fontWeight: 'bold',
	  letterSpacing: 0.25,
	  color: 'white',
	},
  textInput: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 14,
		marginRight: 14,
		height: '100%',
		
		
	},
 
},
);

