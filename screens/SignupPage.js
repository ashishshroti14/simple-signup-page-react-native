import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Linking,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
function SignupPage({ route, navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [agreement, setAgreement] = useState(false);
  const [agreementMsgVisible, setAgreementMsgVisible] = useState(false);
  const [emailMsgVisible, setEmailMsgVisible] = useState(false);
  const [passwordMsgVisible, setPasswordMsgVisible] = useState(false);

  // const checkAgreement = () => {
  //   if (agreement) {

  //   }
  // }

  function ValidateEmail(email) {
    // console.log(email, 'email');
    if (email === undefined || email.length === 0 || email === null) {
      return setEmailValid(false);
    }
    if (/\S+@\S+\.\S+/.test(email)) {
      return setEmailValid(true);
    }
    return setEmailValid(false);
  }

  function ValidatePassword(password) {
    // console.log(password);
    if (password.length > 7) {
      return setPasswordValid(true);
    }
    if (password === undefined || password === null || password.length === 0) {
      return setPasswordValid(false);
    }
    setPasswordValid(false);
  }

  useEffect(() => {
    // ValidatePassword(password);
    // ValidateEmail(email);
  }, []);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}> Your Email</Text>
          <View style={styles.inputContainer}>
            <TextInput
              value={email}
              onChangeText={(value) => {
                setEmail(value);
                ValidateEmail(value);
              }}
              style={styles.input}
            ></TextInput>

            <AntDesign
              name="check"
              size={24}
              color={emailValid ? '#0b59ed' : '#d4f1fc'}
              style={styles.icon}
            />
          </View>
          {emailMsgVisible && (
            <Text style={{ fontSize: 10 }}>Please input a valid email</Text>
          )}
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              value={password}
              secureTextEntry={secureTextEntry}
              onChangeText={(value) => {
                setPassword(value);
                ValidatePassword(value);
              }}
              style={styles.input}
            ></TextInput>
            {secureTextEntry ? (
              <Feather
                name="eye"
                size={24}
                color="#0b59ed"
                style={styles.icon}
                onPress={() =>
                  setTimeout(() => {
                    setSecureTextEntry((current) => !current);
                  }, 50)
                }
              />
            ) : (
              <Feather
                name="eye-off"
                size={24}
                color="#0b59ed"
                style={styles.icon}
                onPress={() =>
                  setTimeout(() => {
                    setSecureTextEntry((current) => !current);
                  }, 50)
                }
              />
            )}
          </View>
          {passwordMsgVisible && (
            <Text style={{ fontSize: 10 }}>At least 8 characters required</Text>
          )}
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            tintColors={{ true: '#0b59ed', false: 'black' }}
            value={agreement}
            onValueChange={setAgreement}
            style={styles.checkbox}
          />
          <Text style={styles.tnc}>
            I agree to the
            <Text
              style={{
                color: '#0b59ed',
                textDecorationLine: 'underline',
              }}
              onPress={() => Linking.openURL('')}
            >
              Terms & Conditions
            </Text>
            <Text> and </Text>
            <Text
              style={{
                color: '#0b59ed',
                textDecorationLine: 'underline',
              }}
              onPress={() => Linking.openURL('')}
            >
              Privacy Policy
            </Text>
          </Text>
        </View>
        {agreementMsgVisible && (
          <Text style={{ fontSize: 10 }}>Please tick the checkbox </Text>
        )}
        <View>
          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={0.5}
            // disabled={agreement}
            onPress={() => {
              const check = () => {
                ValidateEmail(email);
                ValidatePassword(password);
                setEmailMsgVisible(!emailValid);
                setAgreementMsgVisible(true);
                setPasswordMsgVisible(!passwordValid);
                // console.log(agreementMsgVisible, 'agreementMsgVisible');
              };
              agreement && emailValid && passwordValid
                ? navigation.navigate('Success')
                : check();
            }}
            style={styles.SubmitButtonStyle.enabled}
            // disabled={!agreement}
          >
            <Text style={styles.TextStyle}> Create Account </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.GoogleButtonStyle}
            activeOpacity={0.5}
            //   onPress={ this.ButtonClickCheckFunction }
          >
            <Text
              style={[
                styles.GoogleStyle,
                { alignItems: 'center', justifyContent: 'center' },
              ]}
            >
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://img-authors.flaticon.com/google.jpg',
                }}
              />
              Sign up with Google
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.loginMsg}>
          Already have an account?
          <Text
            style={{
              color: '#0b59ed',
              textDecorationLine: 'underline',
            }}
            onPress={() => Linking.openURL('')}
          >
            Login
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  input: {
    width: '80%',
    padding: 10,
  },
  container: {
    paddingVertical: 60,
    margin: 20,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
    fontFamily: 'Poppins_400Regular',
  },
  icon: {
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    width: '20%',
    padding: 10,
  },
  inputContainer: {
    borderWidth: 0,
    backgroundColor: '#d4f1fc',
    borderRadius: 10,
    flexDirection: 'row',
    // width: '90%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Poppins_400Regular',
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Poppins_400Regular',
    paddingVertical: 5,
  },
  fieldContainer: {
    paddingVertical: 20,
  },
  GoogleButtonStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    // marginLeft: 30,
    // marginRight: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0b59ed',
  },
  SubmitButtonStyle: {
    enabled: {
      marginTop: 10,
      paddingTop: 15,
      paddingBottom: 15,
      // marginLeft: 30,
      // marginRight: 30,
      backgroundColor: '#0b59ed',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    },
    disabled: {
      marginTop: 10,
      paddingTop: 15,
      paddingBottom: 15,
      // marginLeft: 30,
      // marginRight: 30,
      backgroundColor: '#afacac',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    },
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  GoogleStyle: {
    color: '#0b59ed',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
    color: '#0b59ed',
  },
  tnc: {
    margin: 8,
  },
  loginMsg: {
    margin: 10,
  },
  tinyLogo: {
    width: 20,
    height: 20,
  },
};

export default SignupPage;
