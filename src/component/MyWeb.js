import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

import {WebView} from 'react-native-webview';

const MyWeb = () => {
  const ActivityIndicatorLoadingView = () => {
    //making a view to show to while loading the webpage
    return (
      <ActivityIndicator
        color="#990000"
        size="large"
        style={styles.ActivityIndicatorStyle}
      />
    );
  };
  return (
    <View style={styles.container}>
      {/*<WebView 
                    source={{html: '<h1>Hello javaTpoint</h1>'}} 
                />*/}
      {/*   <WebView 
                    source={require("./resources/index.html")} 
                />*/}
      <WebView
        onLoadStart={console.log('----start----')}
        onLoadEnd={console.log('----End----')}
        onLoad={console.log('----Load----')}
        source={{uri: 'https://reactnative.dev/docs/webview.html'}}
        javaScriptEnabled={true}
        renderLoading={ActivityIndicatorLoadingView}
        startInLoadingState={true}
      />
    </View>
  );
};
export default MyWeb;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ActivityIndicatorStyle: {
    flex: 1,
    marginTop: -600,
  },
});
