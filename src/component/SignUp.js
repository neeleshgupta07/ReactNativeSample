import React, {Component} from 'react';
import {View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

class SignUp extends Component {
  state = {};
  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{marginBottom: 10}}
          label="Full Name"
          value={this.state.text}
          mode="outlined"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={{marginBottom: 10}}
          label="Email"
          value={this.state.text}
          mode="outlined"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={{marginBottom: 10}}
          label="Passwod"
          value={this.state.text}
          mode="outlined"
          onChangeText={(text) => this.setState({text})}
        />

        <Button
          style={{marginTop: 20}}
          icon="login"
          mode="contained"
          onPress={() => console.log('SignIn')}>
          Sign Up
        </Button>
      </View>
    );
  }
}

export default SignUp;
