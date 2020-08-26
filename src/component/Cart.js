import {View, FlatList, Image, ScrollView, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Card, Title, Paragraph, Button, IconButton} from 'react-native-paper';
import {removeProduct} from '../actions/CartActions';

const Cart = ({navigation}) => {
  const [totalAmount, setTotalAount] = useState(null);
  const dispatch = useDispatch();
  const userData = useSelector((state) => {
    console.log('------state--cart-----' + JSON.stringify(state));
    return state;
  });

  useEffect(() => {
    totalAmount_();
  });
  const totalAmount_ = () => {
    let amount = 0;
    for (let i = 0; i < userData.cart.length; i++) {
      amount = amount + userData.cart[i].price * userData.cart[i].count;
      console.log('------amount-----' + amount);
    }
    setTotalAount(amount.toFixed(2));
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{padding: 10, marginBottom: 10}}>
        {userData.cart.map((item, index) => (
          <View key={item.id}>
            <Card
              style={{marginBottom: 10, padding: 10, height: 150}}
              onPress={() => {
                navigation.navigate('ProductDetails', {item});
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{height: 100, width: '100%'}}
                    source={{uri: item.image}}
                    resizeMode={'center'}
                  />
                </View>
                <View style={{flex: 2, marginLeft: 10}}>
                  <Title numberOfLines={2} style={{fontSize: 17}}>
                    {item.title}
                  </Title>
                  <Paragraph>Quantity : {item.count}</Paragraph>
                  <Paragraph
                    style={{
                      fontSize: 16,
                      marginTop: 10,
                      color: '#990000',
                      fontWeight: 'bold',
                    }}>
                    {' '}
                    {'\u20B9'} {item.price * item.count}
                  </Paragraph>
                </View>
                <IconButton
                  icon="delete"
                  color="gray"
                  onPress={() => {
                    dispatch(removeProduct(item));
                  }}></IconButton>
              </View>
            </Card>
          </View>
        ))}
        {/* <FlatList
          data={userData.cart}
          renderItem={({item}) => (
            <Card
              style={{marginBottom: 10, padding: 10, height: 150}}
              onPress={() => {
                navigation.navigate('ProductDetails', {item});
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{height: 100, width: '100%'}}
                    source={{uri: item.image}}
                    resizeMode={'center'}
                  />
                </View>
                <View style={{flex: 2, marginLeft: 10}}>
                  <Title numberOfLines={2} style={{fontSize: 17}}>
                    {item.title}
                  </Title>
                  <Paragraph>Quantity : {item.count}</Paragraph>
                  <Paragraph
                    style={{
                      fontSize: 16,
                      marginTop: 10,
                      color: '#990000',
                      fontWeight: 'bold',
                    }}>
                    {' '}
                    {'\u20B9'} {item.price * item.count}
                  </Paragraph>
                </View>
                <IconButton
                  icon="delete"
                  color="gray"
                  onPress={() => {
                    dispatch(removeProduct(item));
                  }}></IconButton>
              </View>
            </Card>
          )}
          keyExtractor={(item, index) => index.toString()}
        /> */}
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          padding: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: '#990000',
            fontWeight: 'bold',
          }}>
          Total- {' \u20B9 '}
          {totalAmount}
        </Text>
        <Button
          icon="shopping"
          mode="contained"
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          Continue
        </Button>
      </View>
    </View>
  );
};

export default Cart;
