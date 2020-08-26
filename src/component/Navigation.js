import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Posts from './Posts';
import StudentList from './StudentList';
import TodoList from './TodoList';
import UserDetails from './UserDetails';
import UserInfo from './UserInfo';
import {View} from 'react-native';
//import {createStore, applyMiddleware} from 'redux';
//import {userReducer} from '../reducer/UserReducer';
import {Provider as StoreProvider, useSelector, useDispatch} from 'react-redux';
//import {masterReducer} from '../reducer/CombineReducers';
import LoveCalculator from './LoveCalculator';
import {
  Button,
  DefaultTheme,
  Provider as PaperProvider,
  IconButton,
} from 'react-native-paper';
import TodoAsyncStore from './TodoAsyncStore';
import TabNavigation from './TabNavigation';
import thunk from 'redux-thunk';
import ImagePickers from './ImagePicker';
import MyWeb from './MyWeb';
import StoreProducts from './StoreProducts';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {TransitionSpecs, CardStyleInterpolators} from '@react-navigation/stack';
const Stack = createStackNavigator();
//const store = createStore(userReducer);
//const store = createStore(userEductionReducer);

// const store = createStore(masterReducer, applyMiddleware(thunk));
// console.log(store.getState());
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#660000',
    accent: 'yellow',
  },
};

const Navigation = () => {
  const [isSignedIn, setisSignedIn] = React.useState(false);
  const dispatch = useDispatch();
  const loginData = useSelector((state) => {
    return state;
  });
  React.useEffect(() => {
    // setTimeout(function () {
    //   setisSignedIn(true);
    // }, 3000);
    setisSignedIn(loginData.preLogin.isLogin);
  });

  const signOut = () => {
    dispatch({type: 'SIGN_IN', payload: false});
  };
  return (
    // <StoreProvider store={store}>
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          headerMode="float">
          {isSignedIn ? (
            <>
              <Stack.Screen
                name="Home"
                component={TabNavigation}
                options={{
                  title: 'Welocme to React Native',
                  headerStyle: {
                    backgroundColor: '#660000',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                  headerRight: () => (
                    <View style={{margin: 5}}>
                      <IconButton
                        onPress={signOut}
                        title="Info"
                        color="#ffffff"
                        icon="logout"
                      />
                    </View>
                  ),
                  headerLeft: () => (
                    <View style={{margin: 5}}>
                      <IconButton
                        onPress={() => alert('This is a button!')}
                        color="#ffffff"
                        icon="menu"
                      />
                    </View>
                  ),
                }}
              />
              <Stack.Screen
                name="Posts"
                component={Posts}
                options={{
                  title: 'Posts',
                  headerStyle: {
                    backgroundColor: '#AC8F38',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
              <Stack.Screen
                name="StudentList"
                component={StudentList}
                options={{
                  title: 'Student List',
                  headerStyle: {
                    backgroundColor: '#AC8F38',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
              <Stack.Screen
                name="UserDetails"
                component={UserDetails}
                options={{
                  title: 'User Details',
                  headerStyle: {
                    backgroundColor: '#AC8F38',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
              <Stack.Screen
                name="TodoList"
                component={TodoList}
                options={{
                  title: 'Todo List',
                  headerStyle: {
                    backgroundColor: '#AC8F38',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
              <Stack.Screen
                name="UserInfo"
                component={UserInfo}
                options={{
                  title: 'User Info',
                  headerStyle: {
                    backgroundColor: '#AC8F38',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
              <Stack.Screen
                name="LoveCalculator"
                component={LoveCalculator}
                options={{
                  title: 'Love Calculator',
                  headerStyle: {
                    backgroundColor: '#ff80b3',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
              <Stack.Screen
                name="TodoAsyncStore"
                component={TodoAsyncStore}
                options={{
                  title: 'Todo AsyncStore',
                  headerStyle: {
                    backgroundColor: '#660000',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
              <Stack.Screen
                name="ImagePickers"
                component={ImagePickers}
                options={{
                  title: 'Select Image',
                  headerStyle: {
                    backgroundColor: '#660000',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
              <Stack.Screen
                name="MyWeb"
                component={MyWeb}
                options={{
                  title: 'MyWeb',
                  headerStyle: {
                    backgroundColor: '#660000',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
              <Stack.Screen
                name="StoreProducts"
                component={StoreProducts}
                options={{
                  title: 'My Store',
                  headerStyle: {
                    backgroundColor: '#660000',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
              <Stack.Screen
                name="ProductDetails"
                component={ProductDetails}
                options={{
                  title: 'Product Details',
                  headerStyle: {
                    backgroundColor: '#660000',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
              <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                  title: 'My Cart',
                  headerStyle: {
                    backgroundColor: '#660000',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                  title: 'Sign In',
                  // When logging out, a pop animation feels intuitive
                  // You can remove this if you want the default 'push' animation
                  animationTypeForReplace: isSignedIn ? 'pop' : 'push',
                }}
              />
              <Stack.Screen name="SignUp" component={SignUp} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    // </StoreProvider>
  );
};

export default Navigation;
