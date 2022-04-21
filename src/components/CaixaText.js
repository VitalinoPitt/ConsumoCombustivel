
import { View, Text ,StyleSheet, TextInput} from 'react-native'
import React, {useState,useLayoutEffect} from 'react'

export default function CxTex(props) {

    const [place, setPlace] = useState(props.place ? props.place :"")
    const [teclakey, setTypeKey] = useState(props.teclakey ? props.teclakey : 'default')

    return (
        <View>
        {props.value ?   
        <Text style={styles.campo}>
            {place}
        </Text>
        : null}

        <View style={styles.caixaTexto}>
                <TextInput 
                placeholderTextColor="black"
                placeholder={place}
                onChangeText={props.set}
                value={props.value}
                secureTextEntry= {props.security? props.security : false}
                style={{color: 'black', fontSize:15}}
                keyboardType={teclakey}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    caixaTexto:{
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      marginHorizontal:30,
      marginVertical:10,
      borderColor: "black",
      
    },
    campo:{
        fontSize: 15,
        color: "black",
        marginHorizontal:30,
    }
  });
  