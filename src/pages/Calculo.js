import { View, Image, Text, StyleSheet, Alert } from 'react-native'
import React, { useState, useLayoutEffect} from 'react';

export default function Calculo(props) {
    const {quilometro, litros} = props.route.params
    const [resp, setResp] = useState()
    const media = quilometro/litros

    useLayoutEffect(() => {
        if(media <= 4){
            setResp("E")
        } else if(media < 8) {
            setResp("D")
        } else if(media < 10) {
            setResp("C")
        } else if(media < 12) {
            setResp("B")
        } else {
            setResp("A")
        } 
    }, [])

  return (
    <View style={styles.container}>
        <Text style={styles.titulo} >Média de Consumo do Veículo:</Text>
        <Text style={styles.consumo}>{media} Km/l</Text>
        <Text style={styles.titulo} >Indicação de Consumo:</Text>
        <View style={styles.box}>
            <Text style={styles.texto}>
                {resp == "A" ? <Image source={require('../images/classA.png')} /> : ""}{"\n"}
                {resp == "B" ? <Image source={require('../images/classB.png')} /> : ""}{"\n"}
                {resp == "C" ? <Image source={require('../images/classC.png')} /> : ""}{"\n"}
                {resp == "D" ? <Image source={require('../images/classD.png')} /> : ""}{"\n"}
                {resp == "E" ? <Image source={require('../images/classE.png')} /> : ""}{"\n"}
            </Text>
            <Text style={styles.texto}>
                A   |   Mais de 12 Km/l {"\n"}
                B   |   Até 12 Km/l {"\n"}
                C   |   Até 10 Km/l{"\n"}
                D   |   Até 8 Km/l{"\n"}
                E   |   Até 4 Km/l{"\n"}
            </Text>
        </View>
        <Image source={require('../images/tabela.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        alignItems: 'center',
    },
    texto:{
        fontSize: 20,
        color: "black",
        textAlign: "left",
    },
    titulo:{
        fontSize: 20,
        color: "black",
        marginBottom: 10,
        fontWeight: "bold"
    },
    consumo:{
        fontSize: 50,
        color: "black",
        marginBottom: 30,
        fontWeight: "bold"
    }
  });  