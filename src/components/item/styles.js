import { StyleSheet } from "react-native";
import {tema} from "../../constants";

export const styles = StyleSheet.create({
  contItems: {
    marginTop: 20,
  },
  contTexto: {
    borderRadius: 10,
    marginHorizontal: 15,
  },
  texto: {
    backgroundColor: tema.colores.secondary,
    color: "#ffffff",
    padding: 20,
    marginBottom: 3,
    marginTop: 3,
    fontSize: 20,
    fontFamily:'Montserrat-Bold',
    borderRadius: 10,
  },
});
