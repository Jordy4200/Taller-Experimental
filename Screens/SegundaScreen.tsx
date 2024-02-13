import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const SegundaScreen = ({ navigation }: any) => {
    return (
        <View style={styles.ContenedorPadre}>
         <Navbar navigation={navigation} />
          <View style={styles.Container}>
          <Text style={styles.titulo}>Sobre nosotros</Text>
            <Text style={styles.subtitulo}>Acerca de los juguetes maziply</Text>
            <Text style={styles.Cuerpo}>
              <Text style={styles.Subrayar}>Maziply Toys</Text> es más que una simple juguetería. Nos centramos en la educación y el desarrollo a través del juego. Con 12,000 pies cuadrados de diversión, es una de las jugueterías más grandes de Estados Unidos.
              {"\n\n"}
              Somos miembros de la Asociación Estadounidense de Venta Minorista de Juguetes Especializados (ASTRA), donde trabajamos para ser reconocidos a nivel nacional como Maestros Minoristas Certificados y Expertos en Juego. Asistimos a eventos, talleres y convenciones en todo el mundo para asegurarnos de convertirnos constantemente en un mejor activo para su familia desde la perspectiva del juego y la educación. ¿Quieres aprender más sobre el juego? Entra y pregúntanos. Somos expertos en juego.
              {"\n\n"}
              Maziply fue fundada por Jordy velasco y comenzó como una empresa de juguetes en línea en 2014, vendiendo juguetes en maziply.com . En 2015, entramos en el mundo del comercio minorista tradicional con la apertura de una juguetería tradicional especializada.
              {"\n\n"}
              Hoy, se ha convertido en la juguetería más grande de Nueva Inglaterra. Nuestra tienda incluso incluye un área para atracciones como laser tag, un laberinto de espejos, área de juegos virtual BEAM y animales mecánicos para montar.
            </Text>
          </View>
          <Footer />
          <PageFooter />
        </View>
      );
    };
    
    export const Navbar = ({ navigation }: any) => {
        return (
    <View style={styles.navbar}>
    <TouchableOpacity onPress={() => console.log('Home pressed')}>
      <Text style={styles.TextoNavbar}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('PrimeraScreen')}>
      <Text style={styles.TextoNavbar}>Tienda</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('SegundaScreen')}>
      <Text style={styles.TextoNavbar}>Nosotros</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('TerceraScreen')}>
      <Text style={styles.TextoNavbar}>Contacto</Text>
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
        TextoNavbar: {
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
      });
    