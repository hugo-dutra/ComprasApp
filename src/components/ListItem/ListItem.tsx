import { Button, Image, Text, TouchableOpacity, View } from "react-native"
import { Lista } from '../../models/Lista.model'
import { ListItemStyle } from "./ListItem.styles"

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
    <View style={ListItemStyle.container}>
      <View style={ListItemStyle.image}>
        <Text>Img</Text>
      </View>
      <View style={ListItemStyle.text}>
        <Text>{props.item.mainLabel} {props.item.mainText}</Text>
        <Text>{props.item.secondLabel} {props.item.secondText}</Text>
      </View>
      <View style={ListItemStyle.button}>
        <TouchableOpacity onPress={props.item.actionDispatch}>
          <Text>TouchMe</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}