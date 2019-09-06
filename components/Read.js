import React from 'react';
import {
    StyleSheet, Text, View, TextInput,ScrollView, TouchableOpacity,} from 'react-native';

    import Note from './Note';

    export default class Read extends React.Component {
        constructor(props){
        super(props);
        this.state = {
            noteArray:[],
            noteText:'',
        }
        }

    render(){
       
      let notes = this.state.noteArray.map((val, key)=> {
         return <Note key={key} val={val} keyval={key}
                  deleteMethod={ ()=>this.deleteNote(key)} />
      });
        return (
     <View style={styles.container}>
         <View style={styles.header}>
             <Text style={styles.headerText}>NOTER</Text>
         </View>
         
         <ScrollView style={styles.scrollContainer}>
           {notes}
         </ScrollView>

         <View style={styles.footer}>

             <TextInput style={styles.textInput}
             placeholder='note'
             onChangeText={(noteText)=>this.setState({noteText})}
             value={this.state.noteText}
             placeholderTextColor='white'
             underlineColorAndroid='transparent'>

             </TextInput>
         </View>

         <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
             <Text style={styles.addButtonText}>
                 +
             </Text>
         </TouchableOpacity>
     </View>
        )
    }
      addNote(){
          if (this.state.noteText){
              var d = new Date();
              this.state.noteArray.push({ 'date': d.getFullYear() + "/" +  (d.getMonth() + 1)+ "/" + d.getDate() ,
                                           'note':this.state.noteText});
              this.setState({noteArray:this.state.noteArray});
              this.setState({noteText:''});
          }
      }
      deleteNote(key){
       this.state.noteArray.splice(key, 1);
       this.setState({noteArray:this.state.noteArray})
      }

    }

    const styles = StyleSheet.create({
        header: {
          justifyContent:'center',
          backgroundColor: '#E91E63',
          alignItems: 'center',
          borderBottomWidth:10,
          borderBottomColor:'#ddd',
        },

        container:{
            flex: 1,
        },
        headerText:{
           color: 'white',
           fontSize:18,
           padding: 26,
        },
        scrollContainer:{
            flex:1,
            marginBottom:100,
        },
        footer:{
            position: 'absolute',
            bottom:0,
            left:0,
            right:0,
            zIndex: 10,

        },
        textInput:{
            alignSelf:'stretch',
            color:'#fff',
            padding:20,
            backgroundColor: '#252525',
            borderTopWidth:2,
            borderTopColor: '#ededed',
        },
        addButtonText:{
            color: '#fff',
            fontSize:24,
        },
        addButton:{
            position:'absolute',
            zIndex: 10,
            right:20,
            bottom:90,
            backgroundColor:'#E91E63',
            width: 90,
            borderRadius:50,
            height:90,
            alignItems:'center',
            justifyContent:'center',
            elevation: 8,
        },
    });