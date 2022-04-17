import { ParamListBase, RouteProp } from '@react-navigation/native'
import React from 'react'
import { Button } from 'react-native'


const TabNavitatorHeader: React.FC<{ handleLoginNavigation: () => void }> = props => {
  return (
    <>
      <Button title='press here' onPress={() => props.handleLoginNavigation()} />
    </>
  )
}

export default TabNavitatorHeader