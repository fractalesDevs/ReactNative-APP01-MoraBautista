import { StyleSheet } from "react-native";
import {tema} from "../../constants";

export const styles = StyleSheet.create({
  modalContainer: {
    paddingVertical: 20,
  },
  modalTitle: {
    marginTop: 60,
    marginHorizontal: 20,
    fontFamily:'Montserrat-Bold'
  },
  modalTitTxt: {
    fontSize: 25,
    marginBottom: 15,
    color: "#f41353",
    fontFamily:'Montserrat-Bold'
  },
  modalContTxt: {
    marginHorizontal: 20,
  },
  modalTxt: {
    fontSize: 18,
    fontFamily:'Montserrat-Regular',
  },
  contBotones: {
    marginHorizontal: 10,
    marginTop: 5,
  },
  modalBtn: {
    marginBottom: 0,
    borderRadius: 10,
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
