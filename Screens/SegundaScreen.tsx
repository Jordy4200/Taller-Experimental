import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View ,ScrollView, ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Car, Product } from './PrimeraScreen';


interface Props{
  cars: Car[];
  isVisible: boolean;
  changeVisible:()=>void;
}







export const SegundaScreen = ({ navigation }: any) => {

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      datanueva();
    });

    return unsubscribe;
}, [navigation]);


const datanueva = async () => {
  try {
      const cartItems = await AsyncStorage.getItem('cartItems');
      if (cartItems) {
          const parsedItems = JSON.parse(cartItems);
          setProducts(parsedItems);
      } else {
          setProducts([]);
      }
  } catch (error) {
      console.error('Error al obtener los productos de AsyncStorage:', error);
  }
};
  const getTotal = (productData: Product[]) => {
    let total = 0;
    productData.forEach(product => {
      total += product.price;
    });
    setTotal(total);
  };
  const removeItemFromCart = async (id: number) => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    if (itemArray) {
      let parsedArray = JSON.parse(itemArray);
      let newArray = parsedArray.filter((item: number) => item !== id);
      await AsyncStorage.setItem('cartItems', JSON.stringify(newArray));
      datanueva();
    }
  };

  const checkOut = async () => {
    try {
      await AsyncStorage.removeItem('cartItems');
    } catch (error) {
      console.error(error);
    }

    ToastAndroid.show('Items will be Delivered SOON!', ToastAndroid.SHORT);

    navigation.navigate('PrimeraScreen');
  };







  const renderProducts = (product: Product) => {
    return (
      <TouchableOpacity
        key={product.id}
        onPress={() => navigation.navigate('ProductInfo', {productID: product.id})}
        style={{
          width: '100%',
          height: 100,
          marginVertical: 6,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '30%',
            height: 100,
            padding: 14,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 10,
            marginRight: 22,
          }}>
 <Image
          source={{uri: product.ProductImagen}}
          style={styles.productImage}
        />
        </View>
        <View
          style={{
            flex: 1,
            height: '100%',
            justifyContent: 'space-around',
          }}>
          <View style={{}}>
            <Text
              style={{
                fontSize: 14,
                maxWidth: '100%',
                color: 'white',
                fontWeight: '600',
                letterSpacing: 1,
              }}>
              {product.Productname}
            </Text>
            <View
              style={{
                marginTop: 4,
                flexDirection: 'row',
                alignItems: 'center',
                opacity: 0.6,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  maxWidth: '85%',
                  marginRight: 4,
                }}>
                &#8377;{product.price}
              </Text>
              <Text>
                (~&#8377;
                {product.price + product.price / 20})
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderRadius: 100,
                  marginRight: 20,
                  padding: 4,
                  borderWidth: 1,
                  borderColor: 'white',
                  opacity: 0.5,
                }}>
              </View>
              <Text>1</Text>
              <View
                style={{
                  borderRadius: 100,
                  marginLeft: 20,
                  padding: 4,
                  borderWidth: 1,
                  borderColor: 'white',
                  opacity: 0.5,
                }}>
              </View>
            </View>
            <TouchableOpacity onPress={() => removeItemFromCart(product.id)}>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

    return (






      
        <View
        style={{
          width: '100%',
          height: '100%',
        backgroundColor: 'white',
        position: 'relative',
      }}>
      <ScrollView>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            paddingTop: 16,
            paddingHorizontal: 16,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity >
  
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              fontWeight: '400',
            }}>
            Detalle de  orden
          </Text>
          <View></View>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: '500',
            letterSpacing: 1,
            paddingTop: 20,
            paddingLeft: 16,
            marginBottom: 10,
          }}>
          Mi carrito de compras!
        </Text>
        <View style={{paddingHorizontal: 16}}>
        {products.map(renderProducts)}
        </View>
        <View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Direccion de envio
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: 'light',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 12,
                    borderRadius: 10,
                    marginRight: 18,
                  }}>

                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    Alborada 2
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'black',
                      fontWeight: '400',
                      lineHeight: 20,
                      opacity: 0.5,
                    }}>
                    Calle quito y tena
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Metodo de pago
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: 'light',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 12,
                    borderRadius: 10,
                    marginRight: 18,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: '900',
                      color: 'blue',
                      letterSpacing: 1,
                    }}>
                    VISA
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color:'black',
                      fontWeight: '500',
                    }}>
                    Visa Classic
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'black',
                      fontWeight: '400',
                      lineHeight: 20,
                      opacity: 0.5,
                    }}>
                    ****-9092
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginTop: 40,
              marginBottom: 80,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'black' ,
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Informacion total 
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 8,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: 'black',
                  opacity: 0.5,
                }}>
                Subtotal
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: 'black',
                  opacity: 0.8,
                }}>
                &#8377;{total}.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 22,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: 'black',
                  opacity: 0.5,
                }}>
                Shipping Tax
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: 'black',
                  opacity: 0.8,
                }}>
                  &#8377;{total}.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: 'black',
                  opacity: 0.5,
                }}>
                Total
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'black',
                }}>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 10,
          height: '8%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => (total !== null && total !== 0 ? checkOut() : null)}
          style={{
            width: '86%',
            height: '90%',
            backgroundColor:'grey',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text 
            style={{
              fontSize: 12,
              fontWeight: '500',
              letterSpacing: 1,
              color: 'black',
              textTransform: 'uppercase',
            }}>
            CHECKOUT ({total !== null ? total + total / 20 : 0})
          </Text>
        </TouchableOpacity>
      </View>
    </View>
      );
    };

    export default SegundaScreen;
    
    
    const styles = StyleSheet.create({
        ContenedorPadre: {
          flex: 1,
          justifyContent: 'space-between',
        },
        productImage: {
          width: '30%',
          height: '100%',
          resizeMode: 'contain',
        },
        navbar: {
          backgroundColor: 'lightgrey',
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
        },
        TextoNavbar: {
          fontSize: 18,
          fontWeight: 'bold',
        },
        Container: {
          flex: 1,
          padding: 20,
        },
        titulo: {
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#2F4F4F',
          },
          subtitulo: {
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#708090',
          },
          Cuerpo: {
            fontSize: 18,
            marginTop: 10,
          },
          Subrayar: {
            fontWeight: 'bold',
            color: '#800000',
          },
            Container1: {
                flex: 1,
                padding: 20,
            },
            titulo1: {
                fontSize: 24,
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#2F4F4F',
            },
        
      });
    