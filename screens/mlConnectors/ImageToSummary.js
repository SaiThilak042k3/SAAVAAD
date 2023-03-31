import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const API_URL = 'http://192.168.34.133:12345/image_text_summarize';

const App = () => {
  const [image, setImage] = useState(null);
  const [output, setOutput] = useState(null);

  const handleChoosePhoto = async () => {
    const options = {
      mediaTypes: 'Images',
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    };
    const response = await ImagePicker.launchImageLibraryAsync(options);

    if (!response.cancelled) {
      setImage(response.uri);
    }
  };

  const handleUploadPhoto = async () => {
    const formData = new FormData();
    formData.append('image', {
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
    <View>
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />
      )}
      {output && <Text>{output}</Text>}
      <Button title="Upload Photo" onPress={handleUploadPhoto} />
    </View>
  );
};

export default App;