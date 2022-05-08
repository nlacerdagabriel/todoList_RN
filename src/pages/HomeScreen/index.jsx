import React, { useContext } from "react";
import ButtonFloat from "../../components/buttonFloat";
import ModalTask from "../../components/modalTask";
import AppContext from "../../contexts/AppContext";
import { Ionicons } from "@expo/vector-icons";
import * as C from "./styles";
import ItemTask from "../../components/itemTask";
import { SwipeListView } from "react-native-swipe-list-view";
import DeleteItem from "../../components/DeleteItem";

export default () => {
  const { handleOpenModal, taskList, setTaskList} = useContext(AppContext);

  const handleDeleteItem = (index) => {
    let newList = [...taskList]
    newList = newList.filter(item => item.id !== index)
    setTaskList(newList)
  }

  return (
    <C.Container>
      <ModalTask />
      <SwipeListView
        data={taskList}
        renderItem={({item}) => <ItemTask data={item}/>}
        rightOpenValue={-60}
        renderHiddenItem={({item, index}) => <DeleteItem onDelete={() => handleDeleteItem(item.id)} />}
        disableRightSwipe={true}
      />
      <ButtonFloat onPress={handleOpenModal}>
        <Ionicons name="md-add-sharp" size={35} color="white" />
      </ButtonFloat>
    </C.Container>
  );
};
