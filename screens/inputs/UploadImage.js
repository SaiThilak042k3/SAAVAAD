import { View, Text, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';


//Components
import MainContainer from '../../components/containers/MainContainer';



import { colors } from '../../config/Colors';



//theme
import {useContext} from "react";
import { ThemeContext } from '../../contexts/ThemeContext';



const API_URL = 'http://192.168.34.133:12345/image_text_summarize';


export default function UploadImage() {

 

  const {theme} = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  const [image, setImage] = useState(null);
  const [output, setOutput] = useState(null);

  const handleChoosePhoto = async () => {
    const options = {
      mediaTypes: 'image',
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    };
    const response = await ImagePicker.launchImageLibraryAsync(options);


    console.warn()
    if (!response.cancelled) {
      setImage(response.uri);
    }
  };

  const handleUploadPhoto = async () => {
    const formData = new FormData();
    formData.append('file', {
      uri: image,
      type: 'image/jpeg', 
      name: 'image.jpg',
    });

    const response = await fetch(API_URL, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const data = await response.json();
    setOutput(data.summary);
  };
  
  return (
    <MainContainer style={{
      backgroundColor: activeColors.secondary}      
    }
    >
        
        <View>
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />
      )}
      {output && <Text>{output}</Text>}
      <Button title="Upload Photo" onPress={handleUploadPhoto} />
    </View>
    </MainContainer>
  );
}


