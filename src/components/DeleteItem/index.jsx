import * as C from './styles'
import { AntDesign } from '@expo/vector-icons'; 

export default ({onDelete}) => {
  return(
    <C.Container onPress={onDelete} activeOpacity={0.7}> 
      <AntDesign name="delete" size={30} color="white" />
    </C.Container>
  )
}