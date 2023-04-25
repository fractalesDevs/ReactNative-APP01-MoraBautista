import {View, TextInput, Button, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { styles } from './styles/styles';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  const [events, setEvents] = useState([]);
  const[modalVisible, setModalVisible] = useState(false);
  const[selectedEvent, setSelectedEvent]=useState(null);
  const onAdEvent = () => {
    if (text.length === 0)return;
    setEvents([
      ...events,
      {
        id:Math.random().toString(),
        value:  text
      }
    ]);
    setText('');
    console.log(events);
  }

  const onHandlerEvent = (id)=>{
setModalVisible(true);
const selectedEvent = events.find(event => event.id === id);
setSelectedEvent(selectedEvent);
  }
  const renderItem=({item}) =>
  (
          <TouchableOpacity style={styles.contTexto} onPress={()=> onHandlerEvent(item.id)}>
        <Text style={styles.texto}>{item.value}</Text>
        </TouchableOpacity>   
  )

const onHandlerCancelModal = () => {
  setModalVisible(!modalVisible);
  setSelectedEvent(null);
}

const onHandlerDeleteEvent = (id)=> {
setEvents(events.filter(event => event.id !== id));
setModalVisible(!modalVisible);
console.log(modalVisible);
}

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput value={text} onChangeText={(text)=> setText(text)} style={styles.input} placeholder='Escribe elemento'></TextInput>
        <Button title='ADD' color='#f41353' onPress={onAdEvent}/>
      </View>
      <View style={styles.contItems}>
        <FlatList
        renderItem={renderItem}
        data={events}
        keyExtractor={(item) => item.id}
        />
      </View>
      <Modal visible={modalVisible} animationType='slide'>
        <View style={styles.modalContainer}>
<View style={styles.modalTitle}>
  <Text style={styles.modalTitTxt}>Detalle de elemento</Text>
</View>
<View style={styles.modalContTxt}>
  <Text style={styles.modalTxt}>Está seguro de querer borrar este elemento?</Text>
  <Text style={styles.modalTxt}>{selectedEvent?.value}</Text>
</View>
<View style={styles.contBotones}>
  <Button style={styles.modalBtn} title='Cancel' color='#f41353' onPress={onHandlerCancelModal} />
  </View>
  <View style={styles.contBotones}>
  <Button style={styles.modalBtn} title='Delete' color='#f41353' onPress={()=>onHandlerDeleteEvent(selectedEvent.id)} />
  </View>
  </View>
      </Modal>
    </View>
    
  );
}