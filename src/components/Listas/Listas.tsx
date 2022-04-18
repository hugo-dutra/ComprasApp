import React from 'react'
import { View } from 'react-native'
import { Lista } from '../../models/Lista.model'
import { ListItem } from '../ListItem/ListItem'
import { ListasStyle } from './Listas.styles'


const Listas: React.FC<{ items: Lista[], itemListEvent: (params: any[]) => void }> = props => {
  return (
    <View style={ListasStyle.container}>
      {props.items.map((item: Lista) => <ListItem item=
        {{
          mainLabel: item.id.toString(),
          mainText: item.nome,
          secondLabel: 'Second Label',
          secondText: 'Second Text',
          imageUrl: 'imgURL',
          actionDispatch: () => props.itemListEvent([item.id])
        }} />)}
    </View>
  )
}

export default Listas