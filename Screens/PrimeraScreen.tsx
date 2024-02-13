import React from 'react';
import { View, Text, TouchableOpacity, Image,StyleSheet } from 'react-native';

export const PrimeraScreen = ({ navigation }: any) => {
  return (
    <View style={styles.ContenedorPadre}>
       <Navbar navigation={navigation} />
      <View style={styles.Container}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' ,textAlign: 'center'}}>Tienda de productos</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold',textAlign: 'center'}}>Toys & Legos</Text>
        <View style={styles.ContenedorImagen}>
          <View style={styles.imageBox}>
            <Image
              style={styles.image}
              source={{uri: 'https://okdiario.com/img/2017/10/05/lego-caja-grande-de-ladrillos-lego-620x494.jpg'}}
            />
            <Text style={styles.imageTexto}>Lego Classic</Text>
            <Text style={styles.imageTexto}>$19.99</Text>
            <TouchableOpacity style={styles.button} onPress={() => console.log('Add to Cart pressed')}>
              <Text style={styles.buttonTexto}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imageBox}>
            <Image
              style={styles.image}
              source={{uri: 'https://okdiario.com/img/2017/10/05/lego-caja-grande-de-ladrillos-lego-620x494.jpg'}}
            />
            <Text style={styles.imageTexto}>Lego Classic</Text>
            <Text style={styles.imageTexto}>$29.99</Text>
            <TouchableOpacity style={styles.button} onPress={() => console.log('Add to Cart pressed')}>
              <Text style={styles.buttonTexto}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imageBox}>
            <Image
              style={styles.image}
              source={{uri: 'https://okdiario.com/img/2017/10/05/lego-caja-grande-de-ladrillos-lego-620x494.jpg'}}
            />
            <Text style={styles.imageTexto}>Lego Classic</Text>
            <Text style={styles.imageTexto}>$39.99</Text>
            <TouchableOpacity style={styles.button} onPress={() => console.log('Add to Cart pressed')}>
              <Text style={styles.buttonTexto}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer />
      <PageFooter />
    </View>
    
  );
};

export  const Navbar = ({ navigation }: any) => {
    return (
  <View style={styles.navbar}>
    <TouchableOpacity onPress={() => console.log('Home pressed')}>
      <Text style={styles.TextoNarvar}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('PrimeraScreen')}>
      <Text style={styles.TextoNarvar}>Tienda</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('SegundaScreen')}>
      <Text style={styles.TextoNarvar}>Nosotros</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('TerceraScreen')}>
      <Text style={styles.TextoNarvar}>Contacto</Text>
    </TouchableOpacity>
    </View>
    );
  };
  
  const Footer = () => {
    return (
      <View style={styles.footer}>
        <Text style={styles.TextoFooter}>Maziply Toys</Text>
      </View>
    );
  };
  
  const PageFooter = () => {
    return (
      <View style={styles.Footer2}>
        <Text style={styles.TextoFooter2}>© All right Reversed Maziply toys</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
    ContenedorPadre: {
      flex: 1,
      justifyContent: 'space-between',
    },
    navbar: {
      backgroundColor: 'lightgrey',
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    TextoNarvar: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    footer: {
      backgroundColor: 'lightgrey',
      padding: 10,
    },
    TextoFooter: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign:'center'
    },
    Footer2: {
      backgroundColor: 'grey',
      padding: 10,
    },
    TextoFooter2: {
      fontSize: 16,
      color: 'white',
      textAlign:'center'
    },
    Container: {
      flex: 1,
      padding: 20,
    },
    ContenedorImagen: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
    imageBox: {
      alignItems: 'center',
    },
    image: {
      width: 100,
      height: 100,
    },
    imageTexto: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign:'center'
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
  });
