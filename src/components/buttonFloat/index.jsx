import * as C from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

export default ({onPress, children }) => {
  return (
      <C.Container activeOpacity={0.6} onPress={onPress}>
        {children}
    </C.Container>
  );
};
