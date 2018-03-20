import React from 'react';
import { StyleSheet, 
           View,
          Image,
         
         } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import ArtistList from './ArtistList'
import {getArtists} from './api-client'


//importaciones rutas
import {Scene, Router} from 'react-native-router-flux';
import HomeView from './HomeView';
import artistDetailView from './artistDetailView';


export default class App extends React.Component {

    render() {
      
      
    return (
    
    <Router>
        <Scene key = "root">
       
        <Scene key = "home" component = {HomeView}  hideNavBar/>
        <Scene key = "artistDetail" component = {artistDetailView} hideNavBar={false} />

        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'lightgray',
    paddingTop: 50
  }

});
