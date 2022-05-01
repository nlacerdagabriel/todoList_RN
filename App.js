import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { AppProvider } from "./src/contexts/AppContext";
import MainStack from "./src/navigators/MainStack";

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <NavigationContainer>
      <AppProvider>
        <StatusBar animated={true} backgroundColor={'#392DA0'} />
        <MainStack />
      </AppProvider>
    </NavigationContainer>
  );
}
