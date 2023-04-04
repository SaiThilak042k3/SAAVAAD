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
import * as Google from 'expo-auth-session/providers/google';

const Signin = ( {navigation} ) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const onSignInPressed = () => {
  console.warn('Sairam Sign In');
};
const onForgotPasswordPressed = () => {
  console.warn('Good you forgot password');
};
const onSignInWithGoogle = () => {
  const config = {    
    androidClient: `859463544052-m53451d83skkdkves9ssf9l6e4ghv6nc.apps.googleusercontent.com`,
    scopes: ['profile', 'email']
  };

  Google
    .logInAsync(config)
    .then((result) => {
      const {type, user} = result;

      if(type =='success'){
        const { email, name, photoUrl} = user;
        console.warn("Success google sign in");
        setTimeout(() => navigation.navigate('Home', {email, name, photoUrl}, 1000));
      } else{
        console.warn("error google sign in");
      }
    })
    .catch(error => {
      console.warn(error);
    })

};
const onSignUpPressed = () => {
  navigation.navigate('Signup')
};


  const {height} = useWindowDimensions();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image 
        source={Logo} 
        style={[styles.logo, {height: height * 0.3}]} 
        resizeMode= "contain" 
        />

        <CustomInput 
        placeholder="Username" 
        value={username}
        setValue={setUsername}
        />
        <CustomInput 
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
        />

        <CustomButton 
        text="Sign In"
        onPress={onSignInPressed}
        />
        <CustomButton 
        text="Forgot Password?"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
        /> 

        <CustomButton 
        text="Sign In with Google"
        onPress={onSignInWithGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
        />

  <CustomButton 
        text="Don't have an account? Create one"
        onPress={onSignUpPressed}
        type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '100%',
    maxWidth: 300,
    maxHeight: 200,
    marginTop: 150,
  },
}); 

export default Signin;
