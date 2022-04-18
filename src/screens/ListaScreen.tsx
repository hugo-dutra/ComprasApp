import { ParamListBase, RouteProp } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { DATA_COLLECTIONS } from '../constants/enums/collections'
import { FirebaseService } from '../interfaces/impl/FirebaseService'
import { JsonService } from '../interfaces/impl/JsonService'
import { Lista } from '../models/Lista.model'
import CrudService from '../services/CrudService'
import GlobalStyles from '../themes/styles'

const ListaScreen: React.FC<{ route: RouteProp<ParamListBase, "Lista">, navigation: any }> = props => {
  const crudService = new CrudService(new JsonService<Lista>(DATA_COLLECTIONS.LISTAS), DATA_COLLECTIONS.LISTAS);
  const [lista, setLista] = useState<Lista[]>([])

  useEffect(() => {
    recuperaLista();
  }, [])

  const recuperaLista = async () => {
    const listaProdutos = await crudService.getInstance().listAll() as Lista[]
    setLista([...listaProdutos]);
    console.clear();
    console.log(listaProdutos);
  }


  return (
    <View style={GlobalStyles.ScreenContainer}>
      <Text
        style={GlobalStyles.ScreenContainer}
      >

      </Text>
    </View>
  )
}

export default ListaScreen