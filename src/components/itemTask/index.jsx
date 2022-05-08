import * as C from "./styles";
import { Text } from "react-native";

export default ({ data }) => {
  return (
    <C.Container underlayColor={"#dbdbdb"} onPress={() => {}}>
      <C.Text>{data.taskName}</C.Text>
    </C.Container>
  );
};
