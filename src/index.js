import { View } from "react-native";
import { Input, Item, ModalResume } from "./components";
import { styles } from "./styles/styles";
import { useState } from "react";

export default function App() {
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
    console.log(events);
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

  const onHandlerDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
    setModalVisible(!modalVisible);
    console.log(modalVisible);
  };

  return (
    <View style={styles.container}>
      <Input
        buttonColor={"#f41353"}
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
  );
}
