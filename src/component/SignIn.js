import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {Avatar, TextInput, Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';

const SignIn = ({navigation}) => {
  const [userId, setUserID] = useState({});
  const [password, setPassword] = useState({});
  const dispatch = useDispatch();

  return (
    <View style={{padding: 20}}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', margin: 50}}>
        <Image
          style={{width: 100, height: 100}}
          source={require('../../android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png')}
        />
      </View>
      <TextInput
        style={{marginBottom: 15}}
        label="UserId"
        value={userId}
        mode="outlined"
        onChangeText={(value) => setUserID(value)}
      />
      <TextInput
        style={{marginBottom: 30}}
        label="Password"
        value={password}
        mode="outlined"
        onChangeText={(value) => setPassword(value)}
      />
      <Button
        style={{marginBottom: 15}}
        icon="login"
        mode="contained"
        onPress={() => dispatch({type: 'SIGN_IN', payload: true})}>
        Sign In
      </Button>
      <Button mode="outlined " onPress={() => navigation.navigate('SignUp')}>
        Sign Up
      </Button>
    </View>
  );
};

export default SignIn;
