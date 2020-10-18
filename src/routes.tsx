// desabilitar header headershowm: false, desabilita em todas as abas ou em certa pagina -> options ={{}}
// qndo o fluxo é composto por mais de uma pagina, criar uma pasta para inserir as duas paginas
// tem um  cabeçalho em comum em varias paginas com poucas mudanças, mas tem um layout igual -> 
// deixar headershown: false, cardstyle:{backgroundColor: '#f2f3f5'}
// criar pasta components com os conteudos, styles de header, que sao em comum
// ao chamar uma função como parametro não pode colocar os parenteses(), se nao estara executando a função
// useeffect -> faz uma chamada api assim que o componente aparece em tela -> recebe uma função e um array de dependecias-> a função executa qndo o array
// Se precisar passar uma função que possui parametro como parameto -> fazer uma arrow function ex:
// <CallOut tooltip onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}
// route.params -> sao parametros que a rota recebe
// a interrogação verifica se orfanato existe, se sim ele aplica orphanage.latitude
//  se precisa anotar algo, usa se o estado no react.
// text => setName(text) -> qndo cria uma função q seta somente um parametro dentro, é possivel passar direto o nome da função setName
// uri -> endereço dentro do celular

import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import OrphanageDetails from './pages/OrphanageDetails';

const {Navigator, Screen} = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';

export default function Routes(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false}}>
                <Screen 
                    name="OrphanagesMap" 
                    component={OrphanagesMap} 
                />

                <Screen 
                    name="OrphanageDetails" 
                    component={OrphanageDetails} 
                />
            </Navigator>
        </NavigationContainer>
    );
}