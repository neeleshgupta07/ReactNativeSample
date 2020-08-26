import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {Title, Paragraph, Button, IconButton, Badge} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {addProduct} from '../actions/CartActions';

const ProductDetails = ({navigation}) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const userData = useSelector((state) => {
    return state;
  });
  navigation.setOptions({
    headerRight: () => (
      <View>
        <Badge style={{marginBottom: -20, marginLeft: -10, marginRight: 10}}>
          {cartItemCount()}
        </Badge>
        <IconButton
          style={{marginBottom: -10, marginLeft: -10, marginRight: 10}}
          onPress={() => cartScreen()}
          icon="cart"
          color="white"
        />
      </View>
    ),
  });

  const cartItemCount = () => {
    let itemCount = 0;
    for (let i = 0; i < userData.cart.length; i++) {
      itemCount = itemCount + userData.cart[i].count;
    }
    return itemCount;
  };
  addToCart = (item) => {
    item.count = 1;
    dispatch(addProduct(item));
  };
  const cartScreen = () => {
    navigation.navigate('Cart');
  };
  const buyNow = (item) => {
    addToCart(item);
    navigation.navigate('Cart');
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{padding: 20, paddingTop: 10}}>
        <Title>{route.params.item.title}</Title>
        <Image
          style={{height: 300, width: '100%', margin: 15}}
          source={{uri: route.params.item.image}}
          resizeMode={'center'}
        />
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            justifyContent: 'space-between',
          }}>
          <Paragraph
            style={{
              fontSize: 16,
              color: '#606060',
            }}>
            Category:{' '}
            {route.params.item.category.charAt(0).toUpperCase() +
              route.params.item.category.slice(1)}
          </Paragraph>
          <Paragraph
            style={{
              fontSize: 18,
              color: '#990000',
              fontWeight: 'bold',
            }}>
            {' '}
            {'\u20B9'} {route.params.item.price}
          </Paragraph>
        </View>

        <Paragraph
          style={{
            fontSize: 16,
            paddingBottom: 20,
          }}>
          {route.params.item.description}
        </Paragraph>
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#F0F3F4',
          padding: 10,
        }}>
        <View>
          <Button
            icon="cart"
            mode="outlined"
            onPress={() => addToCart(route.params.item)}>
            Add to cart
          </Button>
        </View>
        <View>
          <Button
            icon="shopping"
            mode="outlined"
            onPress={() => {
              buyNow(route.params.item);
            }}>
            Buy now
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
