import { createContext, useState } from "react";

export default AppContext = createContext();

export function AppProvider({ children }) {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [taskList, setTaskList] = useState([]);

  function handleOpenModal() {
    setModalIsVisible(true);
  }

  function handleCloseModal() {
    setModalIsVisible(false);
  }

  return (
    <AppContext.Provider
      value={{
        modalIsVisible,
        handleCloseModal,
        handleOpenModal,
        taskList,
        setTaskList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
