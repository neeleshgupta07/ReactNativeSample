import {View, FlatList, Text, Image, ActivityIndicator} from 'react-native';
import axios from 'axios';
import {useEffect, useState} from 'react';
import React from 'react';
import {Card, Title, Paragraph, Badge, IconButton} from 'react-native-paper';
import {useSelector} from 'react-redux';

const StoreProducts = ({navigation}) => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => setProductList(response.data))
      .catch((error) => console.log('Error'))
      .finally(() => setLoading(false));
  }, []);
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
  const cartScreen = () => {
    navigation.navigate('Cart');
  };
  return (
    <View style={{padding: 10}}>
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', marginTop: 50}}>
          <ActivityIndicator size="large" color="#960A0A" />
        </View>
      ) : (
        <FlatList
          data={productList}
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
                  <Paragraph>
                    Category:{' '}
                    {item.category.charAt(0).toUpperCase() +
                      item.category.slice(1)}
                  </Paragraph>
                  <Paragraph
                    style={{
                      fontSize: 16,
                      marginTop: 10,
                      color: '#990000',
                      fontWeight: 'bold',
                    }}>
                    {' '}
                    {'\u20B9'} {item.price}
                  </Paragraph>
                </View>
              </View>
            </Card>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default StoreProducts;
