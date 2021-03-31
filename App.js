import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupPage from './screens/SignupPage';
import Success from './screens/Success';

export default function App() {
  const RootStack = createStackNavigator();
  const MainStack = createStackNavigator();

  const MainStackScreen = () => {
    return (
      <MainStack.Navigator>
        <MainStack.Screen
          name="SignupPage"
          component={SignupPage}
          options={{ headerShown: false }}
        />
        <MainStack.Screen name="Success" component={Success} />
      </MainStack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        {/* <RootStack.Screen
          name="ColorPaletteModal"
          component={ColorPaletteModal}
          // options={{ headerShown: false }}
        /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
