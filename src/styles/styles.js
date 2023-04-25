import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginHorizontal:20,
    },
    inputContainer: {
      width: '94%',
      flexDirection: 'row',
      marginTop: 65,
      marginHorizontal: 10,
      justifyContent:'space-around',
      alignItems:'center',
    },
    input: {
      width:'80%',
      borderBottomWidth:1,
      borderBottomColor:'#f41353',
    },
    contItems:{
        marginTop:20
    },
    contTexto: {
        borderRadius:10,
        marginHorizontal:15,
    },
    texto:{
        backgroundColor:'#f41353',
        color:'#ffffff',
        padding:20,
        marginBottom:3,
        marginTop:3,
        fontSize:20,
        fontWeight:'bold',
        borderRadius:10,
    },
    modalContainer:{
        paddingVertical:20,
    },
    modalTitle: {
        marginTop:60,
        marginHorizontal:20,
    },
    modalTitTxt:{
        fontSize:25,
        marginBottom:15,
        color:'#f41353',
        fontWeight:'bold',
    },
    modalContTxt:{
        marginHorizontal:20,
    },
    modalTxt:{
        fontSize:18,
    },
    contBotones:{
        marginHorizontal:10,
        marginTop:5,
    },
    modalBtn:{
        marginBottom:0,
       borderRadius:10,
       width:'80%',
       flexDirection:'row',
       justifyContent:'space-around',
    }
  });
  