import { StyleSheet, View, TextInput, Image, Button, Pressable , ActivityIndicator,Text } from "react-native";
import { useState } from "react";


import { colors } from './../../config/Colors';



//theme
import {useContext} from "react";
import { ThemeContext } from "./../../contexts/ThemeContext";

//clipboard
import Clipboard from "../../components/features/ClipBoardCopy";

const TextSummary =  (props) => {
	const [summaryText, setSummary] = useState("");
    const [resultText, setResultText] = useState("");

	const {theme} = useContext(ThemeContext);
	let activeColors = colors[theme.mode];

    const handlePress = async (event) => {
        event.preventDefault();
      
        if (summaryText) {
        const response = await fetch('http://192.168.34.133:12345/text_summarize', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            text: summaryText
        })
      });
      
        const resultText = await response.json();
      
        setResultText(JSON.stringify(resultText));
	  
      }
      };


	return (
		

		<View style={{marginTop: 20, alignItems: 'center'}}>
			<View style={{
				width: '75%',
				height: '50%',
				marginBottom: 20,
				borderRadius: 10,
				backgroundColor: '#E5E8E8',
				flexDirection: 'row',
				alignItems: 'center',
				paddingVertical: 25,							
			}}>
				<Image                 
					source={require('./../../assets/images/summary_icon.png')}
					resizeMode="contain"
					style={{width: 20, height:20, marginTop: 5, marginLeft: 10}}
				/>					
					<TextInput
						style={styles.textInput}
						editable
						multiline
						numberOfLines={4}
						placeholder="Copy & Paste your longgggg essay"
						onChangeText={(text) => setSummary(text)}
						value={summaryText}
					/>    			
			</View>

			<Pressable style={[styles.button, {backgroundColor: activeColors.accent}]} onPress={handlePress}>
				<Text style={styles.text}>Submit</Text>
			</Pressable>

			<ActivityIndicator />


			{/* <Clipboard 
				resultText = {resultText}
			/> */}
			<Text style={styles.resultText}>
				{resultText}
			</Text>
		</View>

		
	);
}

const styles = StyleSheet.create({
	button: {
	  alignItems: 'center',
	  justifyContent: 'center',
	  paddingVertical: 12,
	  paddingHorizontal: 32,
	  borderRadius: 25,
	  elevation: 3,
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
	resultText: {
				width: '75%',
				height: '100%',
				marginTop: 20,
				borderRadius: 10,
				backgroundColor: '#E5E8E8',
				flexDirection: 'row',
				alignItems: 'center',
				paddingVertical: 25,
	},
  });


  export default TextSummary;