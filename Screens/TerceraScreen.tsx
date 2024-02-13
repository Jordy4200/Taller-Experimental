import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const TerceraScreen = ({ navigation }: any) => {
    return (
        <View style={styles.ContenedorPadre}>
          <Navbar navigation={navigation} />
          <View style={styles.Container}>
            <Text style={styles.Titulo}>Contacto</Text>
            <Text style={styles.Cuerpo}>¡MUCHAS GRACIAS POR SU INTERÉS EN MAZIPLY TOYS! ¡NUESTRO OBJETIVO ES AYUDARTE DE LA MANERA QUE MEJOR TE FUNCIONE PARA QUE PUEDAS VOLVER A TENER UN DÍA INCREÍBLE!</Text>
            <Text style={styles.Subtitulo}>Dirección</Text>
            <Text style={styles.Cuerpo}>MAZIPLY TOYS 101 KINGSTON COLLECTION WAY STE B101 KINGSTON, MA 02364</Text>
            <Text style={styles.Subtitulo}>Teléfono</Text>
            <Text style={styles.Cuerpo}>0983246279</Text>
            <Text style={styles.Cuerpo}>¿QUIERES HABLAR CON ALGUIEN? ¡LLAMANOS! LOS EXPERTOS EN JUGUETES Y JUEGOS ESTÁN DISPONIBLES PARA CHARLAR DURANTE EL HORARIO HABITUAL DE LA TIENDA.</Text>
            <Text style={styles.Subtitulo}>Ponerse en contacto</Text>
            <Text style={styles.Cuerpo}>¿BUSCA UNA RESPUESTA POR ESCRITO? COMPLETE EL SIGUIENTE FORMULARIO Y NOS COMUNICAREMOS CON USTED LO ANTES POSIBLE POR CORREO ELECTRÓNICO.</Text>
            <TouchableOpacity style={styles.button} onPress={() => console.log('Formulario de contacto')}>
              <Text style={styles.buttonText}>Formulario de contacto</Text>
            </TouchableOpacity>
          </View>
          <Footer />
          <PageFooter />
        </View>
      );
    };
    
    const Navbar = ({ navigation }: any) => {
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
            <Text style={styles.footerText}>Maziply Toys</Text>
          </View>
        );
      };
      
      const PageFooter = () => {
        return (
          <View style={styles.Footer2}>
            <Text style={styles.TextoFooter}>© All right Reversed Maziply toys</Text>
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
        footerText: {
          fontSize: 18,
          fontWeight: 'bold',
          textAlign:'center'
        },
        Footer2: {
          backgroundColor: 'grey',
          padding: 10,
        },
        TextoFooter: {
          fontSize: 16,
          color: 'white',
          textAlign:'center'
        },
        Container: {
          flex: 1,
          padding: 20,
        },
        Titulo: {
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#2F4F4F',
        },
        Subtitulo: {
          fontSize: 22,
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#708090',
        },
        Cuerpo: {
          fontSize: 18,
          marginTop: 10,
          textAlign:'center'
        },
        button: {
          backgroundColor: 'blue',
          padding: 10,
          marginTop: 10,
        },
        buttonText: {
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
        },
      });
