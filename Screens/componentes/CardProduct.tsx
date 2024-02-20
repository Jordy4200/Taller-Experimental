import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ModalProduct } from './ModalProduct';
import { Product } from '../PrimeraScreen';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { COLOURS } from './colores';

interface Props{
    product: Product
    handlerChangeStocksProducts:(idProducto:number,quantity:number)=>void;
}

export const CardProduct = ({product,handlerChangeStocksProducts}:Props) => {

    // Hook que controla el modal 
    const [showModal, setShowModal] = useState(false);
    
  return (
    <View>
        <TouchableOpacity style={{width:'48%',marginVertical:14,}} onPress={()=>setShowModal(!showModal)}>
            <View style={styles.root}>
                <Image
                    source={{
                        uri: product.ProductImagen
                    }}
                    style={styles.image}/>
                    <View
                     style={{
                        position: 'absolute',
                        width: '20%',
                        height: '24%',
                        backgroundColor: COLOURS.green,
                        top: -25,
                        left: 0,
                        borderTopLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                    <Text 
                    style={{
                        fontSize: 12,
                        color: COLOURS.white,
                        fontWeight: 'bold',
                        letterSpacing: 1,
                      }}
                    >{product.stock}%</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>{product.Productname}</Text>
                        <Text>Precio: ${product.price.toFixed(2)}</Text>
                    </View>
            </View>
        </TouchableOpacity>
        <ModalProduct product={product} isVisible={showModal} changeVisible={()=>setShowModal(!showModal)} handlerChangeStocksProducts={handlerChangeStocksProducts}/>
    </View>
  )
}

const styles=StyleSheet.create({
    root:{
        width:'100%',
        height:100,
        justifyContent:'center',
        position:'relative',
        marginVertical:14,
        alignItems:'center',
        borderColor:'white',
        borderRadius:10,
        marginBottom:50
    },
    image:{
        width:'80%',
        height:'80%',
        resizeMode:'contain',

    },
    title:{
        fontWeight:'600',
        color:'#000',
        fontSize:10,
        marginBottom:2,
        
    },
})