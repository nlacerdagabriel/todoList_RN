import React, { useContext } from "react";
import ButtonFloat from "../../components/buttonFloat";
import ModalTask from "../../components/modalTask";
import AppContext from "../../contexts/AppContext";
import { Ionicons } from "@expo/vector-icons";
import * as C from "./styles";

export default () => {
  const { handleOpenModal } = useContext(AppContext);

  return (
    <C.Container>
      <ModalTask />
      <ButtonFloat onPress={handleOpenModal}>
        <Ionicons name="md-add-sharp" size={35} color="white" />
      </ButtonFloat>
    </C.Container>
  );
};
