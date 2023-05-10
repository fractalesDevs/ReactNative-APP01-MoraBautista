import { StyleSheet } from "react-native";
import {tema} from "../../constants";

export const styles = StyleSheet.create({
  inputContainer: {
    width: "94%",
    flexDirection: "row",
    marginTop: 25,
    marginHorizontal: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: tema.colores.primary,
    fontFamily:'Montserrat-Regular'
  },
});
