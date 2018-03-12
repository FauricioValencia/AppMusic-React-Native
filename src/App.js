import React from 'react';
import { StyleSheet, 
           View,
          Image,
         
         } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import ArtistList from './ArtistList'
import {getArtists} from './api-client'

export default class App extends React.Component {
  componentDidMount(){
    getArtists()
    .then(data=>console.warn('en app',data))
  }
  
    render() {
      const artist ={
        imagen_goku: 'https://img.europapress.es/fotoweb/fotonoticia_20180210183601_640.jpg',
        name: 'Goku-doctrina egoista',
        likes: 200,
        comments: 140,
      }
      const artists  = Array(500).fill(artist);
    return (
      <View style= {styles.container}>
     <ArtistList artists={artists}/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'lightgray',
    paddingTop: 50
  }

});
