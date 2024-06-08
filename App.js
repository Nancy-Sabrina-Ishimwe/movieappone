import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';
import MyStack from './routes/Mystack';
import { PaperProvider } from 'react-native-paper';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  return (
    
      <PaperProvider>
        <NavigationContainer>
          {/* <SafeAreaView/> */}
        <MyStack/>
        {/* <LoginScreen/> */}
        <StatusBar style="auto" />
        </NavigationContainer>
      </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2123',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 230,
    height: 150,
    marginTop: 70,
    borderWidth: 4,
    borderRadius: 15,
    
  },
});
