import React from 'react';
import { StyleSheet, 
          ListView,
         } from 'react-native';

import ArtistBox from './ArtistBox'

export default class ArtistList extends React.Component {
  
  constructor(props) {
    super(props);
 

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
       
    const artist ={
      imagen_goku: 'https://img.europapress.es/fotoweb/fotonoticia_20180210183601_640.jpg',
      name: 'Goku-doctrina egoista',
      likes: 200,
      comments: 140,
    }
    
    this.state = {
      dataSource: ds.cloneWithRows(props.artists)
    };
  }

  render() {
    
    return (
      <ListView
      dataSource={this.state.dataSource}
      renderRow={(artist) =><ArtistBox artist={artist}/>}
    />
    
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
