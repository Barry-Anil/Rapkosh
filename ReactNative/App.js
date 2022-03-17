import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [words, setWords] = useState([])
  useEffect(() =>{
    async function getAllWords(){
      try {
        const words = await axios.get("https://10.0.2.2:5000/api/words")
        console.log(words.data)
        setWords(words.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllWords()
  }, [])
  return (
    <View style={styles.container}>
      <FlatList 
      data={words} 
      renderItem={({item}) => <text style={{fontSize:28, padding:30}}>{item.mainWord}, {item.rhymeWord}</text>}
      keyExtractor={item => item._id}

      />
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
