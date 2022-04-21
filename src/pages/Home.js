import { StyleSheet, Image, Text, View, TextInput, Button, Alert} from 'react-native';
import React, { useState, useLayoutEffect} from 'react';
import CaixaText from '../components/CaixaText';

export default function Home({navigation}) {

  const [quilometro, setquilometro] = useState("")
  const [litros, setLitros] = useState("")

  const verifyBox = () => {
    if(quilometro != "" && litros != ""){
      navigation.navigate('Cálculo',{
        quilometro:quilometro,
        litros:litros,
      })
    } else {
      Alert.alert("Favor preencher os campos...")
    }
  }

  return (
      <View style={styles.container}>
      
      <View style={styles.box}>

        <Text style={styles.subTitle}> Informe os dados nos campos abaixo e confira o consumo conforme a tabela:</Text>

        <CaixaText 
          value={quilometro}
          set={setquilometro}
          place="Quilômetros (Km)"
          teclakey='numeric'
          />

        <CaixaText 
          value={litros}
          set={setLitros}
          place="Litros (Lt)"
          teclakey='numeric'
          />

        <View style={styles.btn}>
          <Button
          title='Calcular'
          fontSize color= "black"
          onPress={verifyBox} 
          />
        </View>

        <Image source={require('../images/etiqueta.png')} />
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: 'white',
    },
    box:{
      marginTop: 50
    },
    btn:{
      backgroundColor: 'white', 
      borderRadius: 10, 
      marginHorizontal: 30 , 
      margin: 50,
    },
    subTitle:{
      fontSize: 19,
      color: "black",
      textAlign: "center",
      marginBottom: 70,
      margin: 10
  }
  });  