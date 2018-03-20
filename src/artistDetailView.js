import React from 'react';
import { StyleSheet, 
           View,
          Image,
         
         } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import ArtistList from './ArtistList'
import {getArtists} from './api-client'

import ArtistBox from './ArtistBox'

export default class artistDetailView extends React.Component {
  

    render() {
      const artist = this.props.artist
      
    return (
     <View style = {styles.container}>
        <ArtistBox artist = {artist}/>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'lightgray',
    paddingTop: 70
  }

});
