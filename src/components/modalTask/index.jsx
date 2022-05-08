import * as C from "./styles";
import { Modal, Text } from "react-native";
import { useContext, useEffect, useRef, useState } from "react";
import ButtonFloat from "../buttonFloat";
import { AntDesign, Entypo } from "@expo/vector-icons";
import uuid from "react-native-uuid";

export default () => {
  const { handleCloseModal, modalIsVisible, taskList, setTaskList } =
    useContext(AppContext);

  const [taskName, setTaskName] = useState("");

  function handleAddNewTask() {
    let newList = [...taskList];
    newList.push({
      id: uuid.v4(),
      taskName,
      done: false,
    });
    setTaskList(newList);
    setTaskName("");
    handleCloseModal();
  }

  const Button = () => {
    return taskName === "" ? (
      <ButtonFloat onPress={handleCloseModal}>
        <AntDesign name="close" size={35} color="white" />
      </ButtonFloat>
    ) : (
      <ButtonFloat onPress={handleAddNewTask}>
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
          <C.Input
            placeholder="Digite sua tarefa..."
            value={taskName}
            onChangeText={(t) => setTaskName(t)}
          />
        </C.ModalContent>
        <Button />
      </C.ModalContainer>
    </Modal>
  );
};
