import React, {useState} from 'react';
import { 
        Text,
        View,
        StyleSheet,
        Image,
        useWindowDimensions,
        ScrollView
      } from 'react-native';
      import Logo from './../../assets/images/logo-b.png';
      import CustomButton from './../../components/custom/CustomButton';
      import CustomInput from './../../components/custom/CustomInput';
      
const Signup = ({navigation}) => {
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [passwordRepeat, setPasswordRepeat] = useState('');
const onRegisterPressed = () => {
  console.warn('Thank you Registered');
};
const onSignInWithGoogle = () => {
  console.warn('Signned in with gooogle');
};
const onSignInPressed = () => {
  navigation.navigate('Signin')
};

const handleSubmit = async () => {
  if (username === '' || email === '' || password === '') {
      alert("All fields are required");
      return;
  }
  await axios.post("http://localhost:8001/api/signin", { name, email, password });
  alert("Sign In Successful");
};
 

  return (
    
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput 
        placeholder="Username" 
        value={username}
        setValue={setUsername}        
        />
        <CustomInput 
        placeholder="Email Id" 
        value={email}
        setValue={setEmail}
        />
        <CustomInput 
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
        />
        <CustomInput 
        placeholder="Repeat Password"
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secureTextEntry
        />

        <CustomButton 
        text="Register"
        onPress={onRegisterPressed}
        />

        <CustomButton 
        text="Sign In with Google"
        onPress={onSignInWithGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
        />

  <CustomButton 
        text="Have an account? Sign In"
        onPress={onSignInPressed}
        type="TERTIARY"
        />
      </View>

      <Text>{JSON.stringify({username,email,password,passwordRepeat})} </Text>
    </ScrollView>
    
  );
}


const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
    marginVertical: 100,
  },
}); 

export default Signup;