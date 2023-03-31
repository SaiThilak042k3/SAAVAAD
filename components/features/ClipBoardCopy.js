import { StyleSheet, View, Image, Pressable } from "react-native";
import { useState } from "react";
import copy from "copy-to-clipboard";


const Clipboard = (props) => {
	const [copyText, setCopyText] = useState('');

	const handleCopyText = (e) => {
	setCopyText(e.target.value);
	}
	
	const copyToClipboard = (props) => {
	copy(copyText);
	alert(`You have copied "${copyText}"`);
	}
	
	return (
	<View style={styles.copyText}>
        <View style={{
            flexDirection: row
        }

        }>
            {props.resultText}
        
            <Pressable onPress={copyToClipboard}>
                <Image                 
                        source={require('./../../assets/images/copyText.png')}
                        resizeMode="contain"
                        style={{width: 20, height:20, marginTop: 5, marginLeft: 10, borderRadius: 25}}
                />
            </Pressable>
        </View>
        
   
        
	
	</View>
	)
}

const styles = StyleSheet.create({	
	copyText: {
	  borderRadius: 25,
      width: '75%',
      height: '75%'
	},
  });

export default Clipboard;
