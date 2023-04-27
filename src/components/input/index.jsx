import React from "react";
import { TextInput, Button, View } from "react-native";
import { styles } from './styles'; 

const Input = ({placeholder, value, onChangeText, buttonColor, buttonTitle, onHandlerButton}) => {
    return(
        <View style={styles.inputContainer}>
        <TextInput value={value} onChangeText={(text)=> onChangeText(text)} style={styles.input} placeholder={placeholder}></TextInput>
        <Button title={buttonTitle} color={buttonColor} onPress={onHandlerButton}/>
      </View>
    )
}

export default Input;