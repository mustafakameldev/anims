<<<<<<< HEAD
import React, { Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from './store/index';
import AuthScreen  from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MainScreen from './screens/mainScreen';



const Tab = createBottomTabNavigator();

class App extends Component {
  
  render() {
    
    return ( 
    <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="welcome" component={WelcomeScreen} />
            <Tab.Screen name="auth" component={AuthScreen} />
            <Tab.Screen name="main" component={MainScreen}   />
          </Tab.Navigator>
        </NavigationContainer>
        </Provider>
    
     );
  }
  
}

export default App;
=======
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
>>>>>>> edab31f... animations
