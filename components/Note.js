import React from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity,} from 'react-native';

    export default class Note extends React.Component {
    render(){
        return (
     <View key={this.props.keyval} style={styles.note}>
         <Text style={styles.noteText}> {this.props.val.date} </Text>
         <Text style={styles.noteText}> {this.props.val.note} </Text> 

         <TouchableOpacity onPress = {this.props.deleteMethod} style={styles.noteDelete}>
             <Text style={styles.noteDeleteText}>
              D
             </Text>
             </TouchableOpacity> 
     </View>
        )
    }
    }

    const styles = StyleSheet.create({
     note:{
         position:'relative',
         padding:20,
         paddingRight:100,
         borderBottomWidth:2,
         borderBottomColor:'#ededed',

     },
     noteText:{
         paddingLeft:20,
         borderLeftWidth:10,
         borderLeftColor:'#E91E63'


     },
     noteDeleteText:{
         color:'white',
     },
     noteDelete:{
        position:'absolute',
        padding:15,
        top:10,
        right:20,
        bottom:90,
        backgroundColor:'#E91E63',
        alignItems:'center',
        justifyContent:'center',
        
     },
    });