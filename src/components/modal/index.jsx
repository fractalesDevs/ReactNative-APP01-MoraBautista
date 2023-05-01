import React from "react";
import { Modal, View, Text, Button } from "react-native";
import { styles } from "./styles";

const ModalResume = ({ vis, selec, cancel, borrar }) => {
  return (
    <Modal visible={vis} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalTitle}>
          <Text style={styles.modalTitTxt}>Detalle de elemento</Text>
        </View>
        <View style={styles.modalContTxt}>
          <Text style={styles.modalTxt}>
            Está seguro de querer borrar este elemento?
          </Text>
          <Text style={styles.modalTxt}>{selec?.value}</Text>
        </View>
        <View style={styles.contBotones}>
          <Button
            style={styles.modalBtn}
            title="Cancel"
            color="#f41353"
            onPress={cancel}
          />
        </View>
        <View style={styles.contBotones}>
          <Button
            style={styles.modalBtn}
            title="Delete"
            color="#f41353"
            onPress={() => borrar(selec.id)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalResume;
