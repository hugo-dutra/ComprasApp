import { ParamListBase, RouteProp } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Listas from '../components/Listas/Listas'
import { DATA_COLLECTIONS } from '../constants/enums/collections'
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

  const handleItemTouched = (params: any[]) => {
    alert(params[0] + " Item touched");
  }


  return (
    <View style={GlobalStyles.ScreenContainer}>
      <Text style={GlobalStyles.ScreenContainer}>
        <Listas items={lista} itemListEvent={handleItemTouched} />
      </Text>
    </View>
  )
}

export default ListaScreen