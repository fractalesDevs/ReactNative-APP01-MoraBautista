import React from "react";
import { styles } from "./styles";
import { Button, Text, View } from "react-native";
import {tema} from "../../constants/tema";

const Precaution = ({checkVacio,setCheckVacio}) => {
    const handlerRegresar = () => {
        setCheckVacio(false);
    }
return(
    <View style={styles.container}>
        <Text style={styles.txt}>Ya no tienes elementos en tu lista!! </Text>
        <Button title="Regresar" color={tema.colores.primary} onPress={handlerRegresar} />
    </View>
);
}

export default Precaution;