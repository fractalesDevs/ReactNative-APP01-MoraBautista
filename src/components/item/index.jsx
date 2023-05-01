import React from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

const Item = ({ events, handlerModal }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.contTexto}
      onPress={() => handlerModal(item.id)}
    >
      <Text style={styles.texto}>{item.value}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.contItems}>
      <FlatList
        renderItem={renderItem}
        data={events}
        keyExtractor={events.id}
      />
    </View>
  );
};

export default Item;
