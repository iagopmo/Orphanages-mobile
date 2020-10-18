// latitudedelta e longitudedelta são o zoom inicial do mapa com a latitude e longitude informadas
// Dimensions vai pegar largura e altura da tela do cell
// nao usar svg, usar png -> exportar em 3 tamanhos 1,2,3x -> os dispositivos mobile tem densidades de pixel diferentes,ms tendo a msm resoluçõa, eles tem mais pixel em tela q outros.
// para importar o png é preciso criar pasta @types e um arquivos index.d.ts que é um arquivo de semi configuração
// marker é a marcação no mapa
// usar chaves duas vezes {{}} é um objeto.
// callout é como se fosse o popup
// callout possui conteudo, é como se fosse uma view
// tooltip = {true} -> faz a estilização do callout do zero, sem usar a padrao. -> se for true , usat somente tooltip
// onpress -> é uma função que executa ao ser clicada
// importar icones -> acessar feather icons.com para saber o nome do icone que vai usar.
// retorna true or false se as fontes ja estao carregadas ou nao, usar if pra testar -> se nao , return null
// é possivel dar codname ao tipo de fonte nunito usada ex: nunito700: Nunito_700Bold,

import React from 'react';

import {useFonts} from 'expo-font';
import {Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold} from '@expo-google-fonts/nunito'

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    nunito700: Nunito_700Bold,
    Nunito_800ExtraBold,
  })

  if(!fontsLoaded){
    return null;
  }


  return (
    <Routes />
  );
}

