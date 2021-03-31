import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  RefreshControl,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Linking,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';
import {
  useFonts,
  Poppins_400Regular,
  Bangers_400Regular,
} from '@expo-google-fonts/dev';
function Success() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Bangers_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <Ionicons name="checkmark-done-circle" size={64} color="green" />
        <Text style={{ fontWeight: 'bold' }}>Account created successfully</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    paddingVertical: 60,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
    fontFamily: 'Poppins_400Regular',
  },
};
export default Success;
