import { StyleSheet } from "react-native";
import { tema } from '../../constants';

export const styles = StyleSheet.create ({
      containerGral:{
        flex: 1,
        backgroundColor:tema.colores.white,
        marginHorizontal:20,
      },
      welcomeContainer:{
        marginTop:50,
        alignItems:'center',
      },
  welcomeTitle:{
    fontSize:30,
    color:tema.colores.primary,
  },
})