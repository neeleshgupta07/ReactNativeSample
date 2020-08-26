import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Image,
  Text,
  Keyboard,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {useEffect} from 'react';

const LoveCalculator = () => {
  const [yourName, setYourName] = useState(null);
  const [crushName, setCrushName] = useState(null);
  const [result, setResult] = useState('');
  const [isLoading, setLoading] = useState(false);

  const calculatePercentage = () => {
    setResult('');
    setLoading(true);
    Keyboard.dismiss();
    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${yourName}&sname=${crushName}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
          'x-rapidapi-key': '',
        },
      },
    )
      .then((response) => response.json())
      .then((response) => {
        setResult(response);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };
  return (
    <View style={styles.maincontainer}>
      {/* <Header title="User Details" /> */}
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Image
          source={{
            uri:
              'https://lh3.googleusercontent.com/proxy/RAEkB8rUaKSv5Wj6lVBtRd3FM83a33GFlIzdLnzeQZMFrLwKh2_FPQqPxwQJE6dMXhIGk3Gs0JYjd7JOFM9Yn1FLJiFmr9bYoUq37tgAHThtJA0E02oZrNs',
          }}
          style={{
            height: 150,
            width: 150,
            resizeMode: 'cover',
          }}
        />
      </View>
      <TextInput
        style={styles.textinput}
        numberOfLines={1}
        placeholder="Your Name"
        onChangeText={(text) => setYourName(text)}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Your crush"
        numberOfLines={1}
        onChangeText={(text) => setCrushName(text)}
      />
      <TouchableOpacity
        style={styles.button_view}
        onPress={() => {
          calculatePercentage();
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {' '}
          Calculate
        </Text>
      </TouchableOpacity>

      {isLoading ? (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" color="#e6005c" />
        </View>
      ) : (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Text style={styles.taxtpercentage}>{result.percentage}</Text>
          <Text style={styles.taxt_result}>{result.result}</Text>
        </View>
      )}
      {/* 
      {result && (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Text style={styles.taxtpercentage}>{result.percentage}</Text>
          <Text style={styles.taxt_result}>{result.result}</Text>
        </View>
      )} */}
    </View>
  );
};

export default LoveCalculator;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#ffcce0',
    paddingTop: 20,
  },

  textinput: {
    height: 40,
    borderColor: '#ff4d94',
    borderBottomWidth: 1,
    width: '80%',
    color: '#fff',
    fontSize: 18,
    marginTop: 40,
    marginLeft: '10%',
    fontWeight: 'bold',
  },

  button_view: {
    marginTop: 60,
    marginLeft: '20%',
    marginRight: '20%',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#ff4d94',
    borderRadius: 10,
  },

  taxtpercentage: {
    color: '#e6005c',
    paddingTop: 40,
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  taxt_result: {
    // backgroundColor: '#C2B180',
    color: '#ff4d94',
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
  loading_container: {
    flex: 1,
    justifyContent: 'center',
  },
});
