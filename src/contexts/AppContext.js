import { createContext, useState } from "react";

export default AppContext = createContext()

export function AppProvider({children}){
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function handleOpenModal(){
        setModalIsVisible(true)
    }

    function handleCloseModal(){
        setModalIsVisible(false)
    }

    return(
        <AppContext.Provider value={{modalIsVisible, handleCloseModal, handleOpenModal}}>
            {children}
        </AppContext.Provider>
    )
}