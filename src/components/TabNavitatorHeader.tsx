import React from 'react'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import GlobalStyles from '../themes/styles'

const TabNavitatorHeader: React.FC<{ handleLoginNavigation: () => void }> = props => {
  return (
    <TouchableOpacity onPress={() => props.handleLoginNavigation()}  >
      <MaterialIcons name="logout" size={25} style={GlobalStyles.Buttons} />
    </TouchableOpacity>
  )
}


export default TabNavitatorHeader
