import React from 'react'
import { View } from 'react-native'
import { Lista } from '../../models/Lista.model'
import { ListItem } from '../ListItem/ListItem'


const Listas: React.FC<{ items: Lista[], itemListEvent: (params: any[]) => void }> = props => {
  return (
    <View>
      {props.items.map((item: Lista) => <ListItem item=
        {{
          mainLabel: item.id.toString(),
          mainText: item.nome,
          actionDispatch: () => props.itemListEvent([item.id])
        }} />)}
    </View>
  )
}

export default Listas