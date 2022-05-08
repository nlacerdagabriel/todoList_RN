import styled from "styled-components/native";


export const ModalContainer = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.View`
    width: 90%;
    height: 60px;
    background-color: #FFF;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
`
export const Input = styled.TextInput`
  border: 1px solid black;
  width: 100%;
  height: 100%;
  padding-left: 20px;
  font-size: 18px;
  border-radius: 15px;
  border: 2px solid #5647D9;
`