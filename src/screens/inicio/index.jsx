import React from "react";
import { View,Text } from "react-native";
import { Input, Item, ModalResume } from "../../components";
import {tema} from "../../constants";
import { styles } from "./styles";
import { useState } from "react";


const Inicio = ({checkVacio,setCheckVacio}) => {
    const [text, setText] = useState("");
  const [events, setEvents] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const onAdEvent = () => {
    if (text.length === 0) return;
    setEvents([
      ...events,
      {
        id: Math.random().toString(),
        value: text,
      },
    ]);
    setText("");
    //console.log(events);
  };

  const onHandlerEvent = (id) => {
    setModalVisible(true);
    const selectedEvent = events.find((event) => event.id === id);
    setSelectedEvent(selectedEvent);
  };
  const onHandlerCancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedEvent(null);
  };

  const handlerVacio = (resp)=>{
if(resp.length<=1){
  console.log('Arreglo vacio')
  setCheckVacio(true)
}else{
  setCheckVacio(false)
}
  }

  const onHandlerDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
    setModalVisible(!modalVisible);
    handlerVacio(events);
  };

    return (
        <View style={styles.containerGral}>
        <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitle}>Agregar producto</Text>
      </View>
      <Input
        buttonColor={tema.colores.primary}
        buttonTitle={"Agregar"}
        onChangeText={(text) => setText(text)}
        onHandlerButton={onAdEvent}
        placeholder={"Ingresa producto a comprar"}
        value={text}
      ></Input>
      <Item events={events} handlerModal={onHandlerEvent}></Item>
      <ModalResume
        vis={modalVisible}
        selec={selectedEvent}
        cancel={onHandlerCancelModal}
        borrar={onHandlerDeleteEvent}
      ></ModalResume>
      </View>
    )
}

export default Inicio;

