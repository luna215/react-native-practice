import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import analytics from "@react-native-firebase/analytics";
export default function App() {

  const handleLog = async () => {
    analytics().logLogin({
      method: 'facebook'
    }).then( () => alert('Sent analytics...')) 
  }

  return (
    <View style={styles.container}>
      <Button title="Predefined event" onPress={handleLog} />
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
