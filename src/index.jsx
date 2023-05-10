import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from "react-native";
import { styles } from "./styles/styles";
import { Precaution,Inicio } from "./screens";
import { useState } from "react";
import {tema} from "./constants";

export default function App() {
  const [checkVacio,setCheckVacio] = useState(false);
  const [loaded] = useFonts({
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!loaded) {
    return <ActivityIndicator size="large" color={tema.colores.primary} />;
  }
  const Content = () => {
if(checkVacio){
return (
  <Precaution checkVacio={checkVacio} setCheckVacio={setCheckVacio}/>
)
}else{
return(
  <Inicio checkVacio={checkVacio} setCheckVacio={setCheckVacio} />
)
} 
  }
  return (
    <View style={styles.container}>
          <Content />
    </View>
  );
}
