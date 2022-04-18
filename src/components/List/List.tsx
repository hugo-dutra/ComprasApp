import React from 'react'
import { View } from 'react-native'
import { ListItem } from '../ListItem/ListItem'

const List: React.FC = props => {
  return (
    <View>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </View>
  )
}

export default List