import React from 'react';
import { StyleSheet, 
          Text,
           View,
          Image,
          props
         } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class ArtistBox extends React.Component {
  render() {
       
   const { image, name, likes, comments} = this.props.artist
    return (
    
        <View style={styles.artistBox}>
                
                    <Image style ={styles.image} source= {{uri:image}}/>
            <View style={styles.info}>
                    <Text style={styles.name}>{name}</Text>
                    
              <View style={styles.row}>
                    <View style = {styles.iconContainer}>
                    <Icon name="md-heart" size={30} color="#900" />
                    <Text>{likes} </Text>
                </View>
                <View style = {styles.iconContainer}>
                    <Icon name="md-chatboxes" size={30} color="#900" />
                    <Text>{comments}</Text>
                </View>
              </View>
            </View>
        </View>
    
    );
  }
}

const styles = StyleSheet.create({
 
  artistBox: {
    backgroundColor:'white',
    flexDirection: 'row',
    margin:5,
    shadowColor:'black',
    shadowOpacity: .9,
      shadowOffset : {
        heght: 1,
        width:-2,
      },
      elevation:2,
  },
  image: {
    width:150,
    height:150
  },
  info:{
    //backgroundColor:'blue',
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
  name:{
    fontSize:20,
    marginTop:10,
  },
  row:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginHorizontal: 40,
    marginTop: 15,
  },
  iconContainer:{
    flex: 1,
    alignItems:'center',
  }

});
