import { StyleSheet, SafeAreaView, TextInput, Button, Text } from "react-native";
import { useState } from "react";



export default function ForKodi() {
	const [summaryText, setSummary] = useState("");
    const [resultText, setResultText] = useState("");

    const handlePress = async (event) => {
        event.preventDefault();
      
        if (summaryText) {
        const response = await fetch('http://192.168.34.133:12345/summarize', {
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
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Clickl</Text>

			<TextInput style={styles.input}
				placeholder="Summary"
				value={summaryText}
				onChangeText={(text) => setSummary(text)}
				keyboardType="summary"    
			/>

            <Button 
                title="Submit"
                onPress={handlePress}
                marginTop='25'
            />

            <Text>
                {resultText}
            </Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFB6C1",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 40,
		color: "#fff",
		marginBottom: 20,
		fontWeight: "bold",
	},
	input: {
		backgroundColor: "#fff",
		padding: 10,
		width: "80%",
		marginTop: 15,
		color: "#000",
        marginBottom: 25,
	},
});
