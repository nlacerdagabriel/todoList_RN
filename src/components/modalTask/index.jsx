import * as C from "./styles";
import { Modal, Text } from "react-native";
import { useContext, useState } from "react";
import ButtonFloat from "../buttonFloat";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default () => {
  const { handleCloseModal, modalIsVisible } = useContext(AppContext);
  const [task, setTask] = useState("");

  const Button = () => {
    return task === "" ? (
      <ButtonFloat onPress={handleCloseModal}>
        <AntDesign name="close" size={35} color="white" />
      </ButtonFloat>
    ) : (
      <ButtonFloat onPress={handleCloseModal}>
        <Entypo name="add-to-list" size={35} color="white" />
      </ButtonFloat>
    );
  };

  return (
    <Modal
      onRequestClose={handleCloseModal}
      animationType="fade"
      visible={modalIsVisible}
      transparent={true}
    >
      <C.ModalContainer>
        <C.ModalContent>
          <C.Input placeholder="Digite sua tarefa..." value={task} onChangeText={(t) => setTask(t)} />
        </C.ModalContent>
        <Button />
      </C.ModalContainer>
    </Modal>
  );
};
