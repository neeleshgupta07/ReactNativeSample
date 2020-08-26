import {View, Text, Button} from 'react-native';

import {LocalNotification} from './LocalPushController';
import React, {Component} from 'react';
class Test extends Component {
  //state = {};
  handleButtonPress = () => {
    LocalNotification();
  };
  render() {
    return (
      <View>
        <Text>Hetttttttttttttttllo</Text>
        <Button
          title="Local Push n Notification"
          onPress={this.handleButtonPress}></Button>
      </View>
    );
  }
}

export default Test;
// const show = () => {
//   console.log('showshow');
// };
// const Test = () => {
//   const handleButtonPress = () => {
//     LocalNotification();
//   };
//   return (
//     <View>
//       <Text>Hetttttttttttttttllo</Text>
//       <Button
//         title="Local Push Notification"
//         onPress={handleButtonPress}></Button>
//     </View>
//   );
// };

// export default Test;
