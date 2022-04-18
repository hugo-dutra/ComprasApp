import { Button, Text, TouchableOpacity, View } from "react-native"
import { Lista } from '../../models/Lista.model'

export type ListItemPropType = {
  mainText?: string,
  secondText?: string,
  mainLabel?: string,
  secondLabel?: string,
  imageUrl?: string,
  actionDispatch?: () => void
}

export const ListItem: React.FC<{ item: ListItemPropType }> = (props) => {
  return (
    <View>
      <Text>{props.item.mainLabel} {props.item.mainText}</Text>
      <Text>{props.item.secondLabel} {props.item.secondText}</Text>
      <TouchableOpacity onPress={props.item.actionDispatch}>
        <Text>TouchMe</Text>
      </TouchableOpacity>
    </View>
  )
}