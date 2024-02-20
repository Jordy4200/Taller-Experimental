import { getName } from 'ionicons/dist/types/components/icon/utils';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image,StyleSheet } from 'react-native';
import { CardProduct } from './componentes/CardProduct';
import { useNavigation } from '@react-navigation/native';
import { ModalCar } from './componentes/ModalCar';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLOURS } from './componentes/colores';

export interface Product{
  id: number;
  Productname: string;
  price: number;
  stock: number;
  ProductImagen: string;
}


export interface Car {
  id:number;
  Productname: string;
  price:number;
  quantity: number;
}

export const products:Product[]=[
  {id:1, Productname:'LEGO® Star Wars™ The Mandalorian’s N-1 Starfighter™ 75325 Building Kit (412 Pieces) ', price: 75.90, stock:10, ProductImagen:'https://www.maziply.com/cdn/shop/products/lego-star-wars-the-mandalorian-s-n-1-starfighter-75325-building-kit-412-pieces-packaging-front.jpg?v=1658861855&width=1000'},
  {id:2, Productname:'LEGO® Star Wars™ Darth Vader™ Mech 75368 Building Toy Set (139 Pieces)', price: 40.10, stock:5, ProductImagen:'https://www.maziply.com/cdn/shop/files/75368-box-front.jpg?v=1689259108&width=1000'},
  {id:3, Productname:'LEGO® Star Wars Chewbacca™ 2319 Piece Building Set (75371)', price: 80.10, stock:5, ProductImagen:'https://www.maziply.com/cdn/shop/files/lego-star-wars-chewbacca-2319-piece-building-set-75371-front-of-box_1.jpg?v=1693412015&width=1000'},
  {id:4, Productname:'LEGO® Star Wars™ The Mandalorian’s N-1 Starfighter™ Microfighter 75363 (88 Pieces)', price: 65.10, stock:5, ProductImagen:'https://www.maziply.com/cdn/shop/files/75363-box-front.jpg?v=1689259274&width=1000'},
  {id:5, Productname:'LEGO® Star Wars New Republic E-Wing™ vs. Shin Hati’s Starfighter™ 1056 Piece Building Set (75364)', price: 75.10, stock:5, ProductImagen:'https://www.maziply.com/cdn/shop/files/75364-box-front.jpg?v=1693417576&width=1000'},
  {id:6, Productname:'LEGO® Star Wars™ Boba Fett™ Mech 75369 Building Toy Set (155 Pieces)', price: 46.10, stock:5, ProductImagen:'https://www.maziply.com/cdn/shop/files/75369-box-front.jpg?v=1689258931&width=1000'},
]




export const PrimeraScreen = () => {

  
  //Hook para actualizar el estado de los productos
  const [productsState, setProductsState] = useState(products);
  //Hook para capturar la lista de productos seleccionados
  const [cars, setCars] = useState<Car[]>([]);
  //Hook para gestionar el modal del car
  const [showModal, setShowModal] = useState(false);

  const totalProductsInCart = cars.reduce((total, car) => total + car.quantity, 0);

  //Función para controlar el stock
  const handlerChangeStockProduct=(idProducto: number, quantity: number)=>{
    const updateStock=productsState.map(item=>item.id == idProducto
      ? {...item,
        stock:item.stock-quantity}
      : item);
    setProductsState(updateStock)
    //llamar función añadir carrito
    addProduct(idProducto, quantity)
  }

  // Función agregar en el carrito de compras
  const addProduct = (idProduct: number, quantity: number) => {
    const product = productsState.find((item) => item.id === idProduct);

    // Si no existe el producto
    if (!product) {
      return;
    }

    //si existe el producto actualiza al carrito y lo añade
    const newCar: Car = {
      id: product.id,
      Productname: product.Productname,
      price: product.price,
      quantity: quantity
    };
    setCars((prevCars) => {
      const updatedCars = [...prevCars, newCar];
      return updatedCars;
    });
  };




  return (
    <View style={styles.ContenedorPadre}>
      <View  style={styles.ContainerTitles}>
        <Text style={styles.textoTitulo}>Tienda de productos</Text>
        <Text style={styles.textoSubtitulo}>Toys & Legos</Text>
        </View>
        <View style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 16,
        }}>
        <TouchableOpacity >
        <Text style={{
              position: 'absolute',
              backgroundColor: COLOURS.white,
              borderRadius: 20,
              width: 20,
              height: 20,
              alignItems: 'center',
              justifyContent: 'center',
              right: -2,
              top: -5,
              color:'black',
            }}
        
        >{cars.length}</Text>
        <MaterialCommunityIcons
              onPress={() => setShowModal(!showModal)}
              name="cart"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundMedium,
                padding: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: COLOURS.backgroundLight,
              }}
              />
        </TouchableOpacity>
        </View>
        <View  style={{padding:16}}>
        <View  style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}> 
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Text style={{fontSize:18,color:'black',fontWeight:'500',letterSpacing:1,top:-5,padding:15}}>
        Productos
        </Text>
        <Text style={{fontSize:18,color:'black',fontWeight:'500',letterSpacing:1,opacity:0.5,marginLeft:10,}}>
          41
        </Text>
        </View>
        <Text 
        style={{fontSize:14,color:'black',fontWeight:'400'}}
        >Ver mas</Text>
        </View>
        <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
        {productsState.map((product) => (
    <CardProduct  key={product.id} product={product} handlerChangeStocksProducts={handlerChangeStockProduct} />
  ))}
</View>
        </View>
        <ModalCar cars={cars} isVisible={showModal} changeVisible={() => setShowModal(!showModal)} />
    </View>
    
  );
};

const styles = StyleSheet.create({
    ContenedorPadre: {
      width:'100%',
      height:'100%',
      backgroundColor: COLOURS.white,
    },
    ContainerTitles: {
      marginBottom:10,
      padding: 16,
    },
    button: {
      backgroundColor: 'grey',
      padding: 10,
      marginTop: 10,
    },
    buttonTexto: {
      color: 'white',
      fontWeight: 'bold',
    },
    textoTitulo: {
      fontSize: 26, 
      fontWeight: '500' ,
      textAlign: 'center',
      color:'black',
      marginBottom:10,
    },
    textoSubtitulo: {
      fontSize: 14, 
      fontWeight: '400' ,
      textAlign: 'center',
      color:'black',
      lineHeight:24,
    },
  });
