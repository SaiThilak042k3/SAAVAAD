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
  console.warn('Signned in with gooogle');
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
