import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { Product } from '../PrimeraScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLOURS } from './colores';
import { useNavigation } from '@react-navigation/native';

interface Props {
    product: Product;
    isVisible: boolean;
    changeVisible: () => void;
    handlerChangeStocksProducts: (idProducto: number, quantity: number) => void;
}
//Mostrar el producto al cual clickeo
export const ModalProduct = ({ product, isVisible, changeVisible, handlerChangeStocksProducts }: Props) => {

    const { width } = useWindowDimensions();
    const [quantity, setQuantity] = useState(1);

    const handlerChangeQuantity = (value: number) => {
        setQuantity(quantity + value);
    };
//Const para verificar el stock y empezar de 1 cuando se resetea
    const handlerAddProducto = () => {
        handlerChangeStocksProducts(product.id, quantity);
        setQuantity(1);
        changeVisible();
        
    };
//Evento para  cerrar el cardproduct, si aplasto en otro lugar que no sea el card se cierra
    const handleRootPress = (event: any) => {
        const { locationX, locationY } = event.nativeEvent;
        const isInsideModal = locationX > 0 && locationX < width && locationY > 0 && locationY < width;
        if (!isInsideModal) {
            changeVisible();
        }
    };

    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <TouchableOpacity style={styles.root} onPress={handleRootPress}>
                <View style={{ width: width * 0.90, ...styles.content }}>
                    <View style={styles.headerModal}>
                        <Text style={styles.title}>{product.Productname} </Text>
                        <View style={styles.iconClose}></View>
                    </View>
                    <View style={styles.image}>
                        <Image
                            source={{ uri: product.ProductImagen }}
                            style={{ width: 200, height: 200 }}
                        />
                    </View>
                    {
                        (product.stock == 0)
                            ? <Text style={styles.textStock}>Producto agotado</Text>
                            :
                            <View>
                                <View style={styles.quantityContainer}>
                                    <TouchableOpacity
                                        style={styles.buttonQuantity}
                                        onPress={() => handlerChangeQuantity(-1)}
                                        disabled={quantity == 1}
                                    >
                                        <Text style={styles.buttonQuantityText}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.textQuantity}>{quantity}</Text>
                                    <TouchableOpacity
                                        style={styles.buttonQuantity}
                                        onPress={() => handlerChangeQuantity(+1)}
                                        disabled={quantity == product.stock}
                                    >
                                        <Text style={styles.buttonQuantityText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.textQuantity}> Total:${(product.price * quantity).toFixed(2)}</Text>
                                </View>
                                <TouchableOpacity style={styles.buttonCar} onPress={handlerAddProducto}>
                                    <Text style={styles.buttonCarText}>Agregar carrito</Text>
                                </TouchableOpacity>
                            </View>
                    }
                </View>
            </TouchableOpacity>
        </Modal>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    content: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    headerModal: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        padding: 10
    },
    iconClose: {
        flex: 1,
        alignItems: 'flex-end'
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000'
    },
    image: {
        alignItems: 'center'
    },
    quantityContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonQuantity: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOURS.blue,
        borderRadius: 30,
        margin: 15
    },
    buttonQuantityText: {
        color: COLOURS.red,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textQuantity: {
        fontSize: 17,
        color: 'black'
    },
    buttonCar: {
        backgroundColor: COLOURS.blue,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 7,
        marginTop: 15
    },
    buttonCarText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    textStock: {
        fontSize: 20,
        color: 'red',
        textAlign: 'center'
    },
});
